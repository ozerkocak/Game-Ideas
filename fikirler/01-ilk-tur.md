# İlk tur · 4 yön

Ekim 2026. Ozer'in isteği: "Akışı olan, puzzle mantığı olan ama yormayan, oynarken rahatlatan, telefonda ses ve titreşimi güzel oyunlar.
Mevcut oyunların kopyası olmasın ama trendlerden beslensin. Mantık Domino Chase'e benzeyebilir."

Her yön `TASARIM-ILKELERI.md`'deki şartlara göre yazıldı ve `TRENDLER.md`'deki bir trendden besleniyor.
**Seçilmeden kod yazılmayacak.**

**Karar:** Ozer B'yi seçti ("başlayalım"). Tasarım: `fikirler/02-kum-sisesi.md`, prototip: `prototipler/01-kum-sisesi.html`.

## Kısa karşılaştırma

| | A · Yumak | B · Kum Şişesi | C · Ateşböceği | D · Suluboya |
|---|---|---|---|---|
| Tek cümle | Yün yumağını yuvarla, iplik nakışı işlesin, kedi peşinde | Akan kumu yönlendir, şişede manzara oluşsun | Sürüyü büyüt, fenerleri yak, gökte takımyıldız çiz | Telefonu eğ, damlaları karıştır, resmi boya |
| Girdi | Sürükle | Sağa sola sürükle | Basılı tut ve sürükle | Telefonu eğ (ya da sürükle) |
| Düşünme | Renk sırası, yün için sapma | Sıradaki renge yer bırakma | Önce toplama mı, hemen gitme mi | Hangi damlaları birleştirmeli, nasıl ayırmalı |
| Baskı | Oyuncu kedi | Kum hiç durmaz | Şafak yaklaşıyor | Boya kuruyor |
| Rahatlatan | Yumuşak kumaş, mırlama | Kum hışırtısı, tane tane titreşim | Gece sesi, çan sesleri | Islak boya, yağmur |
| Final | Nakış yastık olur, kedi üstünde uyur | Şişe döner, arkadan ışık vurur, manzara canlanır | Sürü gökyüzünde dev bir hayvan çizer | Renkler ıslak ıslak birbirine akar, resim çerçevelenir |
| Domino Chase'e yakınlık | Yüksek (motor tekrar kullanılır) | Orta (hedefe göre doldurma) | Düşük | Düşük |
| İlk prototip süresi | En kısa | Orta | Orta | Orta-uzun |
| Ana risk | "Domino Chase'in kaplaması" hissi | Fizik rastgele gelirse puan haksız hissettirir | Kararlar zayıf kalırsa pasif izleme | Eğme her yerde rahat değil, hepsi birlikte kayınca sinir bozabilir |

**Önerim: önce B (Kum Şişesi).** Gerekçe en altta.

---

## A · Yumak

> Parmağınla bir yün yumağını kumaşın üstünde yuvarlıyorsun. Arkasında kalan iplik, kumaştaki silik nakışı işliyor.
> Peşinde oynamak isteyen bir yavru kedi var.

**Trend:** Yün ve iplik sıralama oyunları (Yarn Flow), cozy kedi oyunları. Yünün yumuşaklığını alıyor, sıralamayı almıyor.

**Çekirdek döngü (20-40 sn)**

1. Kumaşta silik, noktalı bir nakış deseni var (çiçek, balık, lale motifi). Desenin farklı renkte parçaları var.
2. Ekranın her yerinden sürükle; yumak tutma halkasını izler (Domino Chase'teki gibi parmak çizgiyi kapatmaz).
3. Yumağın arkasında iplik kalır. Desenin üstündeki iplik dikiş olur ve desenin rengini alır.
4. Her dikiş yumağı küçültür. Kenarlarda yedek yün parçaları var: sapıp toplamak yumağı büyütür ama zaman kaybettirir.
5. Boya kaplarından geçince ipliğin rengi değişir. Desenin mavi parçası mavi iplikle işlenir; **sıra planlaması** buradan gelir:
   "Önce maviyi bitir, sonra kırmızı kabın yanından geçip çiçeğe dön."

**Baskı:** Kedi 2 sn sonra yumağın peşine düşer (Domino Chase'teki dalganın yerine). Yakalarsa yumağa pati atar: yumak biraz kayar, bir parça iplik dolaşır.
Can gitmez, sadece yün kaybedersin. Yün biterse bölüm biter ve o ana kadar işlenen nakış yine gösterilir.

**Ses ve titreşim**

| Katman | Ses | Titreşim |
|---|---|---|
| Mikro | Yumağın yuvarlanma hışırtısı (hıza göre perdesi değişir); desen üstündeki her dikiş bir kalimba notası, melodi oluşur | Her dikişte çok hafif tık |
| Orta | Renk değişince yumuşak bir akor; yedek yün toplayınca "pof" | Orta atım |
| Makro | Nakış tamamlanınca bütün melodi | Mırlama: hızlı, çok hafif atımlardan bir dizi |

**Final:** Kumaş katlanıp yastığa (ya da kazağa, şapkaya) dönüşür, kedi üstüne kıvrılıp mırlar. Bitirilen nakışlar bir sandıkta birikir.

**Yıldız:** ★ Nakışı bitir. ★★ Desenin %85'i doğru renkte. ★★★ Ayrıca bölüm sonunda yumakta yün kalsın.

**Teknik:** Domino Chase motoru (sürükleme, şekil kapsama, melodi, dil, mağaza, bot testleri) büyük ölçüde aynen kullanılır. En hızlı çıkacak oyun.

**Risk:** Domino Chase'i oynamış biri "aynı oyun" diyebilir. Farkı renk planlaması, yün kaynağı ve kedi taşımalı.

---

## B · Kum Şişesi

> Yukarıdan durmadan renkli kum akıyor. Musluğu parmağınla sağa sola sürüyorsun,
> şişenin içinde katman katman bir manzara oluşuyor: deniz, tepeler, gün batımı.

**Trend:** Kum malzemesi şu an çok popüler (Sand Loop, kumdan blok oyunları, kum sanatı ASMR videoları).
Kumun sesini, akışını ve dolma hissini alıyor; blok ve sıralama yok. Lunapark ve sahil kentlerindeki "şişede kum sanatı"nın oyunu.

**Çekirdek döngü (30-45 sn)**

1. Şişenin camında silik bir hedef çizgi var: hangi yükseklikte hangi renk olmalı (mavi deniz, yeşil tepeler, turuncu gökyüzü).
2. Kum hiç durmadan akar. Parmağını sağa sola kaydırınca musluk gelir. Yavaş gidersen kum o noktada tepe olur, hızlı gidersen ince bir katman serilir.
   Yani **çizdiğin şey hızınla şekillenir**: tepe yapmak için bekle, düz katman için süpür.
3. Üstte sıradaki renkler görünür (şimdiki + sonraki iki, her birinin miktarı ile). Kısa planlama buradan gelir:
   "Sonra mavi geliyor, deniz için solda çukur bırakmalıyım."
4. Kum gerçek kum gibi davranır: yığılır, eğimi aşınca kayar. Ufak hatalar kendiliğinden yumuşar.
5. Bazı bölümlerde süs taşları (deniz kabuğu, yıldız, küçük tekne) gelir; doğru anda bırakırsan manzaranın içine gömülür.

**Ek araçlar (bölümlerle açılır)**

| Araç | Ne yapar | Neden |
|---|---|---|
| Üfle | Bir noktaya çift dokun, kum yayılır ve düzleşir | Yanlış tepeyi düzeltme şansı |
| Eğ | Telefonu hafifçe eğ (ya da iki parmakla), üstteki kum o yöne kayar | Dağ yamacı, dalga gibi eğimli katmanlar |
| Musluk ağzı | Dar ya da geniş akış | İnce detay ile hızlı dolgu arasında seçim |

**Baskı:** Kum hiç durmaz; tempo bu. Yanlış yere düşen renk sadece benzerlik yüzdesini düşürür. Ölüm yok.
İleri bölümlerde akış biraz hızlanır ve sıradaki renk listesi kısalır.

**Ses ve titreşim** (bu oyunda titreşim yıldız olur)

| Katman | Ses | Titreşim |
|---|---|---|
| Mikro | Kum hışırtısı: akış hızına göre yoğunlaşan filtreli gürültü; cama değen taneler hafif çıtırtı | Kum tanesi hissi: akışa göre sıklaşan çok hafif tıklar (en fazla ~20/sn) |
| Orta | Bir katman hedef çizgiye oturunca yumuşak bir akor; tepe kayınca kısa "şşşt" | Tepe çöküşünde orta, kısa bir sarsıntı |
| Makro | Mantar kapanırken "pop", sonra manzaranın müziği | Güçlü atım, sonra ışık geçerken dalga dalga hafif titreşim |

**Final:** Şişenin ağzına mantar takılır, şişe 3D döner, arkasından gün ışığı vurur ve kum manzarası canlanır:
güneş kumun içinde batar, tekne yüzer, kuşlar geçer. Bitirilen şişeler bir rafa dizilir (raf, zamanla süslenen bir koleksiyon olur).

**Yıldız:** ★ Şişeyi doldur. ★★ Hedefe %75 benzerlik. ★★★ %90 benzerlik ve bütün süs taşları yerinde.

**Teknik:** Kum için 2D tanecik simülasyonu (falling sand, ~200×350 hücre, telefonda 60 fps rahat). Cam, ışık ve gölge kumun üstüne katman olarak çizilir;
final sahnesi three.js ile 3D. Yeni bir motor, ama tek dosyalık prototipe sığar.

**Risk:** Fizik her seferinde biraz farklı davranır; benzerlik puanı hoşgörülü olmalı (hedef çizgiye birkaç tane mesafe affedilir).
Bot simülasyonuyla "kusursuz oyuncu her bölümde %95+ alabiliyor mu" kontrol edilir.

---

## C · Ateşböceği

> Gece ormanında parmağının ucunda küçük bir ateşböceği sürüsü var. Yolda uyuyanları uyandırıp sürünü büyütüyorsun.
> Geçtiğin fenerler yanıyor ve gökyüzünde bir takımyıldız ortaya çıkıyor.

**Trend:** Kalabalık koşucuları (Count Masters, Mob Control) ve sürü simülasyonu videoları; Colony Flow'un sakin karınca kolonisi.
Büyüme ve finali alıyor; kapı matematiği ve savaş yok.

**Çekirdek döngü (30-50 sn)**

1. Sahne yavaşça ileri akar. Basılı tutup sürükle; sürü parmağını kuş sürüsü gibi dalgalanarak izler.
   Hızlı gidince sürü toplanır, yavaşlayınca açılır.
2. Yoldaki sönük böceklere değince uyanıp sürüye katılırlar.
3. Silik takımyıldız çizgisi üstünde fenerler var. Bir feneri yakmak için yanında belirli sayıda böcek olmalı (fenerin üstünde yazar: 10, 25, 40).
   **Karar:** "Bu fener 40 istiyor, ben 28'im. Sağdaki çalılıktan böcek toplarsam yetişir ama soldaki fener kaçar."
4. Engeller: örümcek ağı (birkaç böcek takılır), rüzgâr (sürüyü iter), dar dal arası (sürü incelir, geride kalanlar yavaşça seni bulur),
   baykuş bakışı (o alanda böcekler söner ve dağılır).

**Baskı:** Gökyüzü yavaşça aydınlanır; şafak gelince bölüm biter. Ölüm yok, sadece yakılmamış fenerler kalır.

**Ses ve titreşim**

| Katman | Ses | Titreşim |
|---|---|---|
| Mikro | Katılan her böcek küçük bir çan sesi; peş peşe katılanlar yükselen arpej olur | Katılan böcek grubu başına çok hafif tık |
| Orta | Fener yanınca sıcak bir akor, melodinin sıradaki cümlesi | Orta, yumuşak atım |
| Makro | Takımyıldız tamamlanınca bütün melodi ve koro | Güçlü atım, sonra yıldızlar yerine oturdukça hafif tıklar |
| Ortam | Cırcır böcekleri, rüzgâr, uzakta su sesi | Yok |

**Final:** Bölüm sonunda sürü gökyüzüne yükselir ve takımyıldızın hayvanına (geyik, balık, kuş) dizilir.
Sürü ne kadar büyükse çizim o kadar parlak ve detaylı olur (Domino 08'deki "büyü, sonda göster" hissi). Takımyıldızlar bir gök haritasında birikir.

**Yıldız:** ★ İlk feneri ve son feneri yak. ★★ Fenerlerin %80'i. ★★★ Bütün fenerler ve sürü hedef büyüklükte.

**Teknik:** three.js; böcekler parlayan sprite'lar, sürü davranışı (boids) 200-500 böcek için telefonda rahat çalışır.

**Risk:** Kararlar zayıf kalırsa oyuncu sadece izler. Zorluğu fener eşikleri ve rota seçimleri taşımalı; bot testinde "her şeyi toplayan" ile "doğrudan giden" profil farklı sonuç almalı.

---

## D · Suluboya

> Telefonu eğiyorsun, kâğıdın üstünde boya damlaları yuvarlanıyor. Damlaları birleştirerek yeni renkler yapıyorsun;
> bıraktıkları iz bir suluboya resmi tamamlıyor.

**Trend:** I Love Hue'nun renk uyumu, boya döküm (paint pouring) ASMR videoları, Suika'daki birleştirme tatmini, klasik eğmeli labirent.
Renk teorisini bulmacaya çeviriyor; eşleştirme ya da ızgara yok.

**Çekirdek döngü (30-45 sn)**

1. Kâğıtta silik bir çizim var, bölgeleri hedef renkte işaretli: gökyüzü mavi, çimen yeşil, güneş turuncu, çiçek mor.
2. Kâğıtta ana renk damlaları duruyor: kırmızı, sarı, mavi. Telefonu eğince **hepsi birlikte** yuvarlanır (ya da parmakla kâğıdı sürüklersin).
3. İki damla değince birleşir ve renk karışır: mavi + sarı = yeşil, kırmızı + sarı = turuncu. Birleşen damla büyür.
4. Damla yuvarlanırken arkasında boya izi bırakır ve küçülür. Bölge yeterince doğru renkle boyanınca dolar ve ıslak bir çiçek gibi açılır.
5. **Karar:** Hepsi birlikte hareket ettiği için damlaları ayırmak için duvarları ve köşeleri kullanırsın.
   "Kırmızıyı köşede tut, mavi sarıyla birleşsin, sonra yeşille çimene in."

**Baskı:** Boya yavaş yavaş kurur; damlalar zamanla küçülür. Ölüm yok, boyanmamış bölgeler beyaz kalır.

**Ses ve titreşim**

| Katman | Ses | Titreşim |
|---|---|---|
| Mikro | Islak kayma sesi, damla hızına göre | Damla kâğıt kenarına değince çok hafif tık |
| Orta | Birleşmede tok bir "blop", bölge dolunca su damlası gibi bir akor | Birleşmede orta atım |
| Makro | Resim tamamlanınca bütün melodi | Güçlü atım, renkler akarken hafif dalga |
| Ortam | Hafif yağmur, cama vuran damlalar | Yok |

**Final:** "Islak üstüne ıslak": bütün renkler bir anda birbirine akar, kâğıt kurur, resim çerçevelenip galeriye asılır. Resim paylaşılabilir.

**Yıldız:** ★ Bütün bölgelere boya değsin. ★★ Bölgelerin %80'i doğru renkte. ★★★ Hepsi doğru renkte ve boya bitmeden.

**Teknik:** 2D canvas; damlalar metaball tekniğiyle, kâğıt dokusu ve boya yayılması gölgelendirici efektle. Uygulamada eğme için Capacitor Motion; tarayıcıda iPhone izin ister.
Sürükleme modu her zaman olmalı.

**Risk:** Yatarken ya da toplu taşımada eğmek rahat değil; sürükleme modu şart. "Hepsi birlikte kayar" bulmacası sinir bozucuya dönebilir, ilk bölümler tek damlayla başlamalı.

---

## Neden önce B

- **Rahatlatma hedefine en yakın olan.** Akan kumu izlemek ve yönlendirmek, kum sanatı videolarının bu kadar izlenmesinin sebebi. Ölüm ve kovalama yok, tempo kumun kendisi.
- **Telefonun titreşimini en iyi kullanan.** Kum tanelerinin parmağa "akması" başka bir oyunda olmayan bir his; ses ve titreşim oyunun merkezinde.
- **Trendde ama kalabalığın dışında.** Kum şu an çok popüler, ama hep sıralama ya da blok olarak. Serbest dökme ve manzara oluşturma boşta.
- **Mantık Domino Chase'e benziyor ama oyun benzemiyor.** Hedefe göre izleme, yüzde, yıldız, sıradaki karar aynı; görünüş, his ve girdi tamamen farklı.
- **Kararın kendisi sonucu belirliyor.** Nereye ne hızla döktüysen manzara o oluyor.
- **Benzer oyun taraması da destekliyor** (aşağıda): şişeye kum dökme sadece oyuncak olarak var; A'nın teması ise Yarn It! ve yün sıralama oyunlarıyla dolu.

Hızlı bir ikinci oyun gerekirse **A (Yumak)** Domino Chase motoruyla en kısa sürede çıkar.

## A ve B'nin benzerleri

Ozer'in sorusu: "A ve B'nin benzerleri var mı?" Mağaza listeleri ve üçüncü parti takip siteleri (MWM, AppGoblin) tarandı; indirme rakamları tahmindir.

### B · Kum Şişesi

| Oyun | Ne yapıyor | Fark |
|---|---|---|
| Sand Bottles (Alon Shama, iPad) | Şişeye renkli kum doldurma; musluğu eğerek ve sürükleyerek yönetme, bölümler + serbest mod | **Mekanik olarak en yakın.** Ama akış baskısı, sıradaki renk planlaması, hedef yüzdesi ve final yok. 2 değerlendirme, yani neredeyse hiç oynanmamış |
| DIY Colorful Bottle Sand Art (Maysalward) | Serbest katman katman kum sanatı, şekilli şişeler, paylaşma | Oyun değil, oyuncak: hedef ve karar yok |
| Colored Sand Painting (Latte Games, 2021) | Tuvale kum dökerek 100 resim; süre ve puan yok | Şişe değil tuval; boyama kitabı gibi |
| Sand in a Bottle (paint.toys, tarayıcı) | Sürükleyip üç renk kum dökme | Oyuncak |
| Sand Bottle Sort, Sand Sorting Challenge, Sand Frenzy | Şişeler arasında kum katmanı taşıyarak renk sıralama | Su sıralama oyununun kum kaplaması |
| Sand Loop, Sand Flow! Collect, Sandy Jam | Konveyörde kutularla renkli kum toplama | Pixel Flow türü |
| Sandtris, Sand Blocks, Sand Block Puzzle, Fill Sand | Düşen bloklar kuma dönüşüyor | Tetris / blok bulmaca türü |

**Sonuç:** Şişeye kum dökme teması var, ama hep serbest bir oyuncak olarak. Akan kum, sıradaki renk kararı, hedefe benzerlik, yıldız ve final bir arada olan bir oyun bulunamadı.
**Risk:** Mağazada "sand" kelimesi çok kalabalık; sıralama ve blok oyunları ekranı dolduruyor. İkon ve ilk ekran görüntüsü sıralama tüpü değil, **içinde manzara olan şişe** göstermeli; isimde "sort" çağrışımı olmamalı.

### A · Yumak

| Oyun | Ne yapıyor | Fark |
|---|---|---|
| Yarn It! (Moon Active, Nisan 2026) | Kedili, ASMR tarzı; yün yumaklarıyla nakışlı resimleri sökme | **Tema neredeyse aynı: kedi + yün + nakış resmi**, hem de Coin Master'ın yayıncısından. Mekanik sıralama / sökme |
| Yarn Flow, Yarn Loop, Wool Flow, Knit Factory, Unravel It! | Konveyörlü yün sıralama, örgü resim tamamlama | Pixel Flow türünün yün kaplaması; ekran görüntüleri hep örgü resim |
| Thread Jam | Makaralarla resmi 3D dikişlerle doldurma, sakin | Eşleştirme; çizme yok |
| Kitty Yarn | Yumağa sıkışan kedileri ip katmanlarını gevşeterek kurtarma | Dokunarak kaldırma |
| Stitch. (Apple Arcade, 2022) | Nakış temalı sayı bulmacası | Izgara bulmacası. Bir eleştirmen "gerçekten dikiyormuş gibi hissettiren bir oyun" istemiş; yani çizerek dikme boşta |
| Unravel (konsol, 2016) | Karakter yürüdükçe yünü çözülüyor, makaralardan yenileniyor | **"Yün kaynak, sapıp yenile" fikri burada var**, ama platform oyunu |
| Roller Splat! / AMAZE! (2019) | Labirentte top yuvarlayıp yolu boyama | İzleme ve doldurma hissi; kaydırarak dört yöne, serbest çizim yok |
| Wake the Cat (2013), Yarning For Freedom (PC) | Yumağı fırlatıp kediye ulaştırma; kedinin pati attığı yumak koşucusu | Kedi ve yumak ilişkisi var, çizme yok |

**Sonuç:** "Sürükle, iplik nakış olsun, peşinde kedi" mekaniği mobilde bulunamadı. Ama **tema dolu**: kedi + yün + nakışlı resim şu an Moon Active'in Yarn It! oyununda ve onlarca yün sıralama oyununda.
Mekanik ise Domino Chase'in kendisi. Yani A mağazada Yarn It!'e benzeyip oyunda Domino Chase'e benzeme riski taşıyor.
A seçilirse tema değişmeli: kedi ve örgü resim yerine başka bir dünya (ör. yün yerine uçurtma ipi, kilim motifi ya da ışık hattı).

## Rafta bekleyenler

Bu turda öne çıkmadı ama ileride açılabilir:

- **Ark:** Kuru toprağa kanal çiz, su peşinden gelsin; sulanan tohumlar şeklin üstünde çiçek açar. A'ya çok benzediği için ayrıldı.
- **Bilye Orkestrası:** Düşen bilyeler için ray çiz, ksilofon çubuklarına çarpıp şarkıyı çalsınlar; finalde hepsi birden düşer. Fiziğin tahmin edilemezliği yorucu olabilir.
- **Kilim:** Tezgâhta desen dokuma. Tema güçlü (Türkiye'ye özgü, dünyada farklı) ama henüz iyi bir mekanik bulunmadı; B ya da A'ya tema olarak eklenebilir.

## Ozer'e sorular

1. Hangi yön? (Birden fazla seçersen ikisinin prototipini sırayla yaparım.)
2. Seçtiğin yönde değiştirmek istediğin bir şey var mı? Tema, final, baskı türü…
3. Domino Chase'teki gibi tanıdık melodiler mi, yoksa bu oyunlarda daha sakin, ortam müziği gibi bir ses mi?
