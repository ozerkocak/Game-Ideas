# Uygulama ikonu (1024x1024, saydamlıksız) ve açılış ekranı (2732x2732) üretir:
# sıcak arka plan üstünde, gün batımı renklerinde dalgalı kum katmanlı cam kavanoz ve ahşap kapak.
import math,random,sys
from PIL import Image,ImageDraw,ImageFilter
random.seed(7)
def hexc(h):h=h.lstrip('#');return tuple(int(h[i:i+2],16) for i in (0,2,4))
def lerp(a,b,t):return tuple(int(a[i]+(b[i]-a[i])*t) for i in range(3))
def background(S):
    img=Image.new('RGB',(S,S));px=img.load();c0,c1=hexc('#f4e7d1'),hexc('#cdb18a')
    for y in range(S):
        for x in range(S):
            r=math.hypot(x-S*.42,y-S*.36)/(S*.95);px[x,y]=lerp(c0,c1,min(1,r))
    return img
def jar(S,scale):
    W,H=S*.46*scale,S*.62*scale;x0,y0=S/2-W/2,S*.535-H/2;x1,y1=x0+W,y0+H;R=W*.17;T=W*.035
    lay=Image.new('RGBA',(S,S),(0,0,0,0));d=ImageDraw.Draw(lay)
    # gölge
    sh=Image.new('L',(S,S),0);ImageDraw.Draw(sh).ellipse([x0-W*.05,y1-H*.035,x1+W*.18,y1+H*.07],fill=150);sh=sh.filter(ImageFilter.GaussianBlur(S*.02*scale))
    # kum: dalgalı katmanlar (alttan üste)
    cols=['#336fa8','#4d93cf','#f3d66a','#ef9d55','#ec93aa','#9175c4'];top=y0+H*.2
    sand=Image.new('RGB',(S,S));sp=sand.load();n=len(cols);band=(y1-top)/n
    def bound(k,x):
        u=(x-x0)/W
        return y1-band*(k+1)+math.cos((u-.5)*6.2832)*H*.035*(1 if k%2==0 else -.7)+math.sin(u*9+k)*H*.006
    for x in range(int(x0),int(x1)+1):
        bs=[bound(k,x) for k in range(n)]
        for y in range(int(top-H*.04),int(y1)+2):
            k=0
            while k<n-1 and y<bs[k]:k+=1
            c=hexc(cols[k]);v=random.random();f=.9+.18*v
            if v>.985:f=.6
            elif v<.012:f=1.25
            sp[x,y]=tuple(max(0,min(255,int(ch*f))) for ch in c)
    # üst yüzey: hafif tümsek
    m=Image.new('L',(S,S),0);md=ImageDraw.Draw(m)
    md.rounded_rectangle([x0+T,y0+T,x1-T,y1-T],radius=R-T,fill=255)
    cut=Image.new('L',(S,S),0);cd=ImageDraw.Draw(cut)
    pts=[(x,top+math.sin((x-x0)/W*3.1416)*-H*.02+math.sin((x-x0)/W*11)*H*.004) for x in range(int(x0),int(x1)+1,4)]
    cd.polygon(pts+[(x1,y1+10),(x0,y1+10)],fill=255)
    from PIL import ImageChops
    m=ImageChops.multiply(m,cut)
    # cam gövde: hafif saydam beyaz, kenarda parlak çizgi, solda dikey ışık
    glass=Image.new('RGBA',(S,S),(0,0,0,0));gd=ImageDraw.Draw(glass)
    gd.rounded_rectangle([x0,y0,x1,y1],radius=R,fill=(255,253,248,46),outline=(255,255,255,190),width=max(2,int(T*.55)))
    gd.rounded_rectangle([x0+W*.1,y0+H*.08,x0+W*.16,y1-H*.12],radius=W*.03,fill=(255,255,255,70))
    gd.rounded_rectangle([x1-W*.1,y0+H*.12,x1-W*.075,y1-H*.25],radius=W*.012,fill=(255,255,255,45))
    # ahşap kapak
    lid=Image.new('RGBA',(S,S),(0,0,0,0));ld=ImageDraw.Draw(lid);lw=W*1.08;lh=H*.09;lx0=S/2-lw/2;ly0=y0-lh*.55
    for i in range(int(lh)):
        t=i/lh;ld.rounded_rectangle([lx0,ly0+i,lx0+lw,ly0+i+1],radius=0,fill=lerp(hexc('#d9a873'),hexc('#a87543'),t)+(255,))
    lm=Image.new('L',(S,S),0);ImageDraw.Draw(lm).rounded_rectangle([lx0,ly0,lx0+lw,ly0+lh],radius=lh*.35,fill=255)
    return sh,sand,m,glass,lid,lm
def compose(S,scale):
    img=background(S);sh,sand,m,glass,lid,lm=jar(S,scale)
    img.paste((80,55,30),mask=sh.point(lambda v:int(v*.5)))
    img.paste(sand,(0,0),m)
    img.paste(glass,(0,0),glass)
    img.paste(lid,(0,0),lm)
    return img
out=sys.argv[1]
compose(2048,1).resize((1024,1024),Image.LANCZOS).save(f'{out}/icon.png')
compose(1366,.5).resize((2732,2732),Image.LANCZOS).save(f'{out}/splash.png')
print('ok')
