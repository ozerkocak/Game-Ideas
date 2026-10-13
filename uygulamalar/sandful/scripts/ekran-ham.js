// App Store ham ekran görüntüleri: 430x932 @3x = 1290x2796 (6.9"), WebGL SwiftShader.
// Kullanım: NODE_PATH=$(npm root -g) node uygulamalar/sandful/scripts/ekran-ham.js en-US|tr-TR
// Yazı tipi için NUNITO=<@fontsource/nunito/files klasörü> (npm install @fontsource/nunito). Ham görüntüler geçici klasöre yazılır, sonra ekran-kare.js.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const APP=path.join(__dirname,'..');const ROOT=path.join(APP,'..','..');const F=(process.env.NUNITO||'')+'/';
const THREE=process.env.THREE||path.join(APP,'node_modules','three','build','three.min.js');
const css=!process.env.NUNITO?'':[600,700,800,900].map(w=>['latin','latin-ext'].map(s=>`@font-face{font-family:'Nunito';font-weight:${w};font-style:normal;font-display:block;src:url(file://${F}nunito-${s}-${w}-normal.woff2) format('woff2');}`).join('')).join('');
const loc=process.argv[2]||'en-US';const out=path.join(require('os').tmpdir(),'sandful-ekran','raw-'+loc.slice(0,2));fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch({args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files']});
 const ctx=await b.newContext({viewport:{width:430,height:932},deviceScaleFactor:3,isMobile:true,hasTouch:true,locale:loc});
 const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(String(e)));
 await p.route('**/three.min.js',r=>r.fulfill({body:fs.readFileSync(THREE),contentType:'application/javascript'}));
 await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:css,contentType:'text/css'}));
 await p.goto('file://'+path.join(ROOT,'prototipler','01-kum-sisesi.html'));await p.waitForTimeout(2500);
 await p.evaluate(()=>document.fonts.ready);
 const shot=async(n)=>{await p.waitForTimeout(2500);await p.screenshot({path:`${out}/${n}.png`});console.log('ok',n,JSON.stringify(await p.evaluate(()=>__game.state())));};
 // önce bütün bölümleri kusursuz oynat (raf küçük resimleri için), istenen anlarda çek
 const plan={0:{mid:.55,name:'1-plaj'},4:{mid:.6,name:'3-daglar'},7:{mid:.8,name:'2-gunbatimi'},3:{hold:true,name:'4-tekne'},9:{result:true,name:'5-gece'}};
 for(let lv=0;lv<10;lv++){const pl=plan[lv];
  await p.evaluate(lv=>{__game.setTS(0);__game.start(lv);__game.autoplay('kusursuz');__game.begin();},lv);
  let took=false;
  for(let k=0;k<900;k++){const st=await p.evaluate(()=>{__game.sim(100);return __game.state();});
   if(pl&&!took&&pl.mid&&st.qi>=Math.floor(st.ql*pl.mid)&&st.state==='pour'){await p.evaluate(()=>{__game.sim(600);__game.autoplay(null);__game.pour(true);__game.sim(1100);});took=true;await shot(pl.name);await p.evaluate(()=>{__game.pour(false);__game.autoplay('kusursuz');});}
   if(pl&&!took&&pl.hold&&st.state==='hold'){await p.evaluate(()=>__game.sim(400));took=true;await shot(pl.name);}
   if(st.state==='result')break;}
  await p.evaluate(()=>__game.sim(2500));await p.waitForTimeout(1500);
  if(pl&&pl.result){await p.waitForTimeout(3000);await shot(pl.name);}}
 await p.evaluate(()=>openRaf());await p.waitForTimeout(800);await shot('6-raf');
 console.log('hatalar',errs.slice(0,5));await b.close();})();
