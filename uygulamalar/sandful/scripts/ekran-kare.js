// ekran-ham.js görüntülerini başlıklı App Store karelerine çevirir. App Store Connect'in istediği boyut: 1206x2622 (6.3" iPhone,
// "iPhone with Dynamic Island, medium display"). Tasarım 430x932 CSS px sahnede çizilir, 402x874 @3x görünüme sığdırılır. JPEG → magaza/ekran-goruntuleri/<dil>/
// Kullanım: NUNITO=<@fontsource/nunito/files> NODE_PATH=$(npm root -g) node uygulamalar/sandful/scripts/ekran-kare.js
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const F=(process.env.NUNITO||'')+'/';const TMP=path.join(require('os').tmpdir(),'sandful-ekran');
const font=[700,800,900].map(w=>['latin','latin-ext'].map(s=>`@font-face{font-family:'Nunito';font-weight:${w};src:url(file://${F}nunito-${s}-${w}-normal.woff2) format('woff2');}`).join('')).join('');
const OUT=path.join(__dirname,'..','magaza','ekran-goruntuleri');
// sıra, ham dosya, başlık (en/tr), arka plan, yazı rengi
const S=[
 ['01','2-gunbatimi',{en:'Pour sand.<br>Watch a scene appear.',tr:'Kum dök,<br>manzara ortaya çıksın.'},['#fbe3d6','#f3c0a8','#e79a86'],'#4a2a22'],
 ['02','5-gece',{en:'Close the lid on<br>a perfect jar',tr:'Kapağı kapat,<br>yıldızları topla'},['#2c3566','#1d2350','#121636'],'#fff6e6'],
 ['03','3-daglar',{en:'Sand that piles<br>and slides for real',tr:'Gerçek gibi yığılan,<br>kayan kum'},['#ece4f2','#d6c8e4','#bba7d2'],'#3a2c4a'],
 ['04','4-tekne',{en:'Drop a boat,<br>a swan or the moon',tr:'Tekne, kuğu ya da<br>ayı yerine bırak'},['#e3f0f6','#bcdcea','#93c4dc'],'#1f3a4a'],
 ['05','1-plaj',{en:'Follow the lines,<br>layer by layer',tr:'Çizgileri izle,<br>katman katman'},['#f6ecd9','#ecd7b1','#dfc08e'],'#4a3826'],
 ['06','6-raf',{en:'Fill your shelf<br>with calm',tr:'Rafını sakin<br>manzaralarla doldur'},['#f4e7d4','#e6cfae','#d4b28a'],'#4a3826'],
];
(async()=>{const b=await chromium.launch({args:['--allow-file-access-from-files']});
 const VW=402,VH=874,Z=VW/430;const p=await (await b.newContext({viewport:{width:VW,height:VH},deviceScaleFactor:3})).newPage();
 for(const lang of ['en','tr']){fs.mkdirSync(`${OUT}/${lang}`,{recursive:true});
  for(const [n,raw,cap,bg,ink] of S){
   const img=`file://${TMP}/raw-${lang}/${raw}.png`;
   fs.writeFileSync(TMP+'/_frame.html',`<!doctype html><meta charset="utf-8"><style>${font}
    html,body{margin:0;width:100vw;height:100vh;overflow:hidden}
    .st{position:absolute;left:0;top:${((VH-932*Z)/2).toFixed(2)}px;width:430px;height:932px;zoom:${Z}}
    body{background:radial-gradient(120% 70% at 50% 62%,rgba(255,255,255,.55),rgba(255,255,255,0) 60%),linear-gradient(180deg,${bg[0]} 0%,${bg[1]} 55%,${bg[2]} 100%);font-family:'Nunito',sans-serif;color:${ink};position:relative}
    h1{margin:0;position:absolute;top:62px;left:0;right:0;text-align:center;font-weight:900;font-size:34.5px;line-height:1.12;letter-spacing:-.2px}
    .ph{position:absolute;left:50%;top:196px;transform:translateX(-50%);width:318px;padding:8px;border-radius:50px;background:#1c1510;
        box-shadow:0 28px 60px rgba(40,20,5,.35),0 6px 16px rgba(40,20,5,.25),inset 0 0 0 1.5px rgba(255,255,255,.12)}
    .ph img{display:block;width:318px;height:${(318*932/430).toFixed(1)}px;border-radius:42px}
   </style><div class="st"><h1>${cap[lang]}</h1><div class="ph"><img src="${img}"></div></div>`);await p.goto('file://'+TMP+'/_frame.html');
   await p.evaluate(()=>Promise.all([document.fonts.ready,...[...document.images].map(i=>i.decode())]));
   const file=`${OUT}/${lang}/${n}.jpg`;await p.screenshot({path:file,type:'jpeg',quality:92});
   console.log(file,Math.round(fs.statSync(file).size/1024)+'KB');}}
 await b.close();})();
