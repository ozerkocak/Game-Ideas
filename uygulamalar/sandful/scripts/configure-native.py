# npx cap add ios sonrası iOS projesine bizim ayarlarımızı uygular (tekrar çalıştırılabilir).
# Sadece dikey, sadece iPhone, tam ekran, durum çubuğu gizli, şifreleme sorusu "hayır", dil Türkçe.
# Ses oturumu "ambient": kullanıcının çaldığı müzik kesilmez, sessiz anahtarına uyar.
import plistlib,re,os
root=os.path.join(os.path.dirname(__file__),'..','ios','App')
p=os.path.join(root,'App','Info.plist');d=plistlib.load(open(p,'rb'))
d['CFBundleDevelopmentRegion']='tr'
d['CFBundleLocalizations']=['tr']
d['CFBundleDisplayName']='Sandful'
d['UISupportedInterfaceOrientations']=['UIInterfaceOrientationPortrait']
d.pop('UISupportedInterfaceOrientations~ipad',None)
d['UIStatusBarHidden']=True
d['UIViewControllerBasedStatusBarAppearance']=False
d['UIRequiresFullScreen']=True
d['ITSAppUsesNonExemptEncryption']=False
plistlib.dump(d,open(p,'wb'))
pb=os.path.join(root,'App.xcodeproj','project.pbxproj');s=open(pb).read()
s=re.sub(r'TARGETED_DEVICE_FAMILY = "?[0-9,]+"?;','TARGETED_DEVICE_FAMILY = 1;',s)
# İnvesta Teknoloji Anonim Şirketi ekip kimliği (Xcode imzalamayı otomatik bu ekiple yapar)
if 'DEVELOPMENT_TEAM' not in s:s=s.replace('CODE_SIGN_STYLE = Automatic;','CODE_SIGN_STYLE = Automatic;\n\t\t\t\tDEVELOPMENT_TEAM = 3ANJ967SS2;')
open(pb,'w').write(s)
ad=os.path.join(root,'App','AppDelegate.swift');a=open(ad).read()
if 'AVFoundation' not in a:
    a=a.replace('import Capacitor\n','import Capacitor\nimport AVFoundation\n',1)
    a=a.replace('        // Override point for customization after application launch.\n',
                '        // Oyun sesi kullanıcının müziğiyle karışsın (kesmesin) ve sessiz anahtarına uysun.\n        try? AVAudioSession.sharedInstance().setCategory(.ambient, mode: .default)\n',1)
    assert 'AVAudioSession' in a,'AppDelegate beklenen yapıda değil'
    open(ad,'w').write(a)
print('iOS ayarları uygulandı')
# Android: sadece dikey
am=os.path.join(os.path.dirname(__file__),'..','android','app','src','main','AndroidManifest.xml')
if os.path.exists(am):
    m=open(am).read()
    if 'screenOrientation' not in m:
        m=m.replace('android:name=".MainActivity"','android:name=".MainActivity"\n            android:screenOrientation="portrait"',1)
        open(am,'w').write(m)
    print('Android ayarları uygulandı')
