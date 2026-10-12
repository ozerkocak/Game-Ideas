# 01 · Kum Şişesi

> Yukarıdan durmadan renkli kum akıyor. Huniyi parmağınla sağa sola sürüyorsun;
> camın içinde katman katman, silik çizgilere göre bir manzara oluşuyor. Sonunda kapak kapanır, şişe rafına dizilir.

Prototip: `prototipler/01-kum-sisesi.html` (10 bölüm). Telefonda tarayıcıda açılarak oynanır, internet gerekmez.
Ozer ilk turda B'yi seçti ("başlayalım"). Açık sorulara cevap vermedi; kararları ben verdim, aşağıda gerekçeleriyle.

## Verilen kararlar

| Konu | Karar | Neden |
|---|---|---|
| Cam şekli | Dar boyunlu şişe yerine ağzı geniş camlar: kavanoz, kase, kadeh, vazo | Dar boyundan dökülen kum kenarlara ulaşmıyor. Hepsi yukarı doğru genişliyor, böylece camın her köşesine kum düşebiliyor |
| Ses | Tanıdık şarkı yerine her bölüme özel sakin, pentatonik bir melodi | Hedef rahatlatmak. Domino Chase'te beğenilen "şekilden sapınca şarkı durur" hissi korundu: kum doğru yere düştükçe melodi akar, saparsan susar |
| Ortam sesi | Deniz, rüzgâr, gece (cırcır böcekleri) | Rahatlamayı asıl ortam sesi taşır |
| Görsel | three.js yok; 2D tanecik ve ışık-gölge | Kumun dokusu tanecik tanecik görünmeli. Silindir gölgesi, cam parlaklığı, ağız elipsi ve raf gölgesiyle 3D hissi veriliyor |
| Dil | Sadece Türkçe | Prototip. Uygulamaya geçerken İngilizce eklenir |

## Çekirdek döngü (bir bölüm 23-34 sn)

1. Camda silik, kesik çizgiler var: her katmanın üst sınırı. Şu an dökülen rengin bölgesi hafifçe parlar.
2. İlk dokunuşta kum akmaya başlar ve bölüm sonuna kadar durmaz.
3. Ekranın her yerinden sağa sola sürükle; huni parmağın hareketini izler, parmak camı kapatmaz.
4. Kum gerçek kum gibi yığılır: aynı yerde beklersen tepe olur, hızlı süpürürsen ince katman serilir.
5. Renkler alttan üste sırayla gelir. Üst şeritte bütün sıra ve miktarlar görünür; huninin içi kalan kumu gösterir, renk bitmeye yakın huninin üstünde sıradaki renk belirir.
6. Kum bitince kapak kapanır, ışık camın üstünden geçer, katmanlar alttan üste parlayıp birer nota çalar. Sonuç kartı açılır, şişe rafa eklenir.

## Kum fiziği

| Deneme | Sonuç |
|---|---|
| Klasik hücre otomatı (her karede 2 adım) | Kum geliş hızına yetişemedi, dökülen yerde sivri kuleler oluştu (eğim 5,6) |
| Tane yere değince aynı karede yuvarlanıp yerleşir, kural: aşağı ve çapraz | Eğim 45°. Fazla dik, yığınlar sivri |
| Ek kural: 3 yana 2 aşağı | **Eğim 34°, gerçek kum gibi.** Seçilen bu |

- Havadaki taneler parçacık olarak yerçekimiyle düşer. Yere değince ızgaraya girer ve saniyede 180 hücre hızla yokuştan aşağı yuvarlanır; yığılma görünür ama birikmez.
- Ağzın üstüne yığılan kum taşar ve kaybolur.
- Hedef şekillerin eğimi en fazla 0,5'tir (yaklaşık 29°), yani kumun durduğu açının altında; bütün şekiller dökerek kurulabiliyor.
- Telefonda maliyet: fizik adımı 0,12 ms. Yazılımsal çizimde bile ~59 FPS (DPR 3).

## Benzerlik puanı

İlk sürümde hücre hücre renk karşılaştırılıyordu. Botlar bunun yanlış olduğunu gösterdi: büyük, kolay gökyüzü katmanı şişenin yarısını kaplıyor ve hataları sulandırıyordu. Düşünmeden süpüren bot tepe bölümünde %94 alıyordu.

**Şimdiki puan:** Her sütunda, her katmanın üst çizgisi silik çizgiye kaç satır uzak?
2 satıra kadar tam puan, 18 satırda sıfır. Bütün çizgiler ve sütunlar eşit ağırlıkta.
Kum zaman sırasıyla yığıldığı için bir sütundaki renk sayıları çizgilerin yüksekliğini doğrudan veriyor.
Oyuncunun ekranda gördüğüyle aynı şeyi ölçüyor: "çizgiye ne kadar yakınım".

- Yüzde, katmanlar tamamlandıkça yükselir (üst şeritteki büyük çubuk).
- Bir katman bitince o katmanın çizgisi %90 ve üstüyse "Kusursuz katman!", %78 ve üstüyse "Güzel katman".
- Süsler bulundukları katmanın kumu gibi sayılır, böylece puanı bozmaz.

## Yıldız

- ★ %55, ★★ %75, ★★★ %90 ve bütün süsler halkanın içinde.
- Sonraki bölüm için 1 yıldız gerekir. Yıldızsız biten şişe de final gösterisini yapar ve rafa girer ("kaybettin" yok, "daha az güzel sonuç" var).

## Süsler

- Sıra bir süse gelince kum 2,6 sn durur. Süs huninin altında asılı kalır, huniyle birlikte gezer.
- Düşeceği yer kesikli çizgi ve kutuyla gösterilir; hedef halka ve süsün silik görüntüsü camın üstündedir.
- Dokununca bırakılır, dokunmazsan süre bitince kendi düşer.
- Katman sınırındaki süs (tekne, kaktüs, kuğu, ağaç) o katmanın üstüne oturur. Katmanın ortasındaki süs (güneş, ay, yıldız) dökülmekte olan kumun içine gömülür, gökyüzünde asılı görünür.
- Başarı: süsün merkezi hedefe yatayda 6, dikeyde 12 hücreden yakın. Dikey hata zaten katman yüzdesinde cezalanıyor, iki kez cezalandırmamak için geniş.

## Üfleme (8. bölümden itibaren, bölüm başına 3)

Çift dokunma ya da 💨 düğmesi. Huninin altındaki tepenin üstünü iki yana savurur (ortada 4-5 tane derinlik, kenarda sığ).
Yanlış yere yığılan kumu düzeltme şansı. Botlar kullanmıyor; etkisi ölçülmedi.

## Akış serisi ve müzik

- Kum doğru renk bölgesine düşüyorsa düştüğü yer altın renginde parlar ve melodi notası çalar (0,34 sn'de bir).
- 3 sn kesintisiz doğru dökünce "Akış ♪" (bas eklenir), 8 sn'de "Akış ♪♪" (yumuşak akor), 14 sn'de "Akış ♪♪♪" (yüksek parıltı notaları). Kumun düştüğü yerden notalar yükselir.
- 0,45 sn yanlış yere dökünce seri sıfırlanır; ceza yok, sadece müzik sadeleşir.

## Ses ve titreşim

| Katman | Ses | Titreşim |
|---|---|---|
| Mikro | Kum hışırtısı (seyrek tıkırtılar + filtreli gürültü, akarken açılır); doğru yerde melodi notası | Kum tanesi: 55-105 ms'de bir çok kısa atım (doğru yerde 7 ms, yanlışta 4 ms) |
| Orta | Renk değişiminde çan, katman bitince akor, süs yere değince tok "tump", tam yerindeyse arpej, üflemede "fff" | Orta atım (12-40 ms) |
| Makro | Kapak "pop" ve cam çınlaması, katmanlar parlarken akor notaları, yıldızlar birer nota | Kapakta güçlü (60 ms), yıldız başına orta |

- Uygulamada Capacitor Haptics, Android tarayıcıda `navigator.vibrate`.
- **iPhone tarayıcıda** `vibrate` yok. iOS 18'deki gizli "switch" hilesi denendi (dokunma ve sürükleme anında); deneysel, çalışmayabilir. Uygulamada kesin çalışır.
- Ses ve titreşim raf ekranından ayrı ayrı kapatılır.

## Bölümler

| # | Ad | Cam | Yeni olan | Akış (tane/sn) |
|---|---|---|---|---|
| 1 | Kumsal | Kavanoz | Düz katmanlar: süpürmeyi öğren | 520 |
| 2 | Tepe | Kavanoz | Sağda tepe: beklersen yığılır | 540 |
| 3 | Koy | Kase | Eğik kumsal, yuvarlak dip | 560 |
| 4 | Tekne | Kavanoz | İlk süs: tekne denizin üstüne | 560 |
| 5 | Dağlar | Vazo | İki zirve, kar sadece tepelerde | 600 |
| 6 | Vadi | Kavanoz | Ortada nehir, yeşil kenarlarda | 600 |
| 7 | Çöl | Kase | İki kumul, kaktüs kumulda, güneş gökte asılı | 620 |
| 8 | Gün batımı | Kadeh | 6 ince katman, üfleme | 640 |
| 9 | Göl | Kavanoz | Düz göl yüzeyi, kuğu ve ağaç | 640 |
| 10 | Gece | Kavanoz | Lacivert dağlar, yıldız ve ay gökte; minör melodi | 660 |

## Bot simülasyonu (bölüm başına 3 koşu: ortalama yüzde ve yıldız, süs sonucu)

| Profil | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Hiç dokunmayan (hep ortada) | 21 ★0 | 28 ★0 | 27 ★0 | 23 ★0 | 39 ★0 | 34 ★0 | 17 ★0 | 47 ★0 | 28 ★0 | 25 ★0 |
| Süpürücü (düşünmeden sağa sola) | 78 ★2 | 80 ★2 | 70 ★1 | 71 ★1 | 41 ★0 | 69 ★1 | 66 ★1 | 36 ★0 | 83 ★2 | 72 ★1 |
| Dağınık (büyük algı hatası) | 74 ★1,3 | 72 ★1 | 74 ★1,3 | 74 ★1,3 | 74 ★1,7 | 72 ★1 | 74 ★1,3 | 78 ★2 | 76 ★1,7 | 67 ★1 |
| İnsan (geç tepki, küçük hata) | 88 ★2,3 | 82 ★2 | 88 ★2,3 | 92 ★2,7 | 82 ★2 | 85 ★2 | 84 ★2 | 82 ★2 | 89 ★2,3 | 82 ★2 |
| Kusursuz | 99 ★3 | 96 ★3 | 94 ★3 | 96 ★3 | 97 ★3 | 93 ★3 | 95 ★3 | 96 ★3 | 92 ★3 | 94 ★3 |

- Akıllı botlar süpürür ama eksik olan yerde yavaşlar (gerçek bir oyuncunun yaptığı gibi). İnsan botu 0,15 sn geç algılar, eksikleri ±3 satır hatayla görür.
- Strateji fark yaratıyor: süpürücü ile insan arasındaki fark dağlarda ve gün batımında 40 puanın üstünde.
- İnsan botu her bölümde süsleri tutturuyor; dağınık bot yarısını kaçırıyor.

## Bilinen eksikler ve dürüst notlar

- **Zorluk eğrisi botlarda düz.** İnsan botu bütün bölümlerde %82-92 alıyor. Gerçek oyuncu için ileri bölümler muhtemelen daha zor (ince katmanlar, süs zamanlaması), ama bunu Ozer'in denemesi gösterecek.
- **Bot hızları tahmin.** İnsan botu saniyede 95 hücre süpürüyor (telefonda ~200 px/sn). Gerçek oyuncu daha hızlı ya da yavaş olabilir.
- 2D kesitte kum en fazla 34° yığılıyor; dik, sivri dağlar yapılamıyor. Manzaralar yumuşak tepeler, kumullar, koylar.
- Yeni bölüm açmak için 1 yıldız yetiyor ve düşünmeden süpüren bile çoğu bölümde 1 yıldız alıyor. Rahatlatma hedefi için bilerek böyle; istenirse eşik yükseltilir.
- Telefonun eğilmesi (eğ aracı) ve dar/geniş musluk bu sürümde yok.

## Ozer'e sorular (oynadıktan sonra)

1. Kum dökmek rahatlatıyor mu? Yoksa kum hiç durmadığı için acele hissi mi veriyor?
2. Silik çizgiler ve parlayan bölge yeterince anlaşılır mı, neyi nereye dökeceğini biliyor musun?
3. Titreşim (Android ya da uygulama) tane tane hissediliyor mu, fazla mı?
4. Melodi hoş mu, yoksa sadece kum sesi ve ortam sesi mi kalsın?
5. Süs bırakmak (tekne, kaktüs, ay) keyifli mi? Daha çok süs mü olmalı?
