# 01 · Kum Şişesi

> Yukarıdan durmadan renkli kum akıyor. Huniyi parmağınla sağa sola sürüyorsun;
> camın içinde katman katman, silik çizgilere göre bir manzara oluşuyor. Sonunda kapak kapanır, şişe rafına dizilir.

Prototip: `prototipler/01-kum-sisesi.html` (10 bölüm). Telefonda tarayıcıda açılarak oynanır.
**Güncel sürüm 2:** 3D grafik (three.js) ve yeni kum fiziği. Değişiklikler en altta; üstteki bölümler sürüm 1'i anlatır.
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

## Sürüm 2: 3D grafik ve yeni kum fiziği

Geri bildirim: "Oyun mantığı güzel. Grafikler hoşuma gitmedi, çok daha kaliteli olmalı. Aynı yere çok kum gidince ya da köşeye gelince bazı tanelerin aşağı kayması gerekiyor, orada eksikler var."

### Fizik

Sürüm 1'de tane yere değince birkaç karede yuvarlanıp duruyor, sonra bir daha hiç kontrol edilmiyordu. Akış yoğunken taneler birbirini beklerken durdu, dik yerler ve köşeler öyle kaldı.

| Kural | Nasıl çalışır |
|---|---|
| Hız ve ivme | Her tanenin yatay ve dikey hızı var. Düşen tane ivmelenir (saniyede en fazla 330 hücre). |
| Çarpma saçılması | Çarpan tanenin düşme hızının bir kısmı yana savrulmaya döner. Akışın altında koni yayılarak büyür. |
| Çığ | Yamaçtan kayan tane hız kazanır ve aynı karede 4 hücreye kadar akar. Döküş durunca kum ~1 sn içinde durur. |
| Uyanma | Yerinden oynayan tane üstündeki ve yanındaki taneleri uyandırır; altı boşalan tane mutlaka düşer. |
| Yüzey hiç uyumaz | Yüzeydeki taneler her karede yeniden denenir; 34°'den dik bir yer kalamaz. Testlerde takılı tane: 0. |
| 34° yığılma | 3 yana 2 aşağı yol açıksa tane yana yürür (artık adım adım, ışınlanmadan). |
| Cam kenarı | Cam üstünde sürtünme daha az: kum ~27°'den dik cam yamaçta kayar (kase dibinde ortaya akar). |
| Akış sıkışması | İlk denemede akışın düştüğü sütunda taneler birbirinin üstüne konup havada 60 hücrelik bir kule oluşturdu. Çarpan tane artık aynı anda saçılıp kayıyor; kule yok. |

Izgara 150×200'den **210×280**'e çıktı (taneler %30 daha küçük). Fizik adım başına 3 geçiş; fizik ve sahne güncellemesi kare başına ~2,3 ms (test tarayıcısında, çizim hariç).

### Grafik (three.js r128)

- **Gerçek 3D sahne:** Ahşap masada cam kavanoz, sıcak arka plan, yumuşak temas gölgesi ve ışığın uzattığı gölge.
- **Cam:** Kenarlara doğru güçlenen yansıma (fresnel), solda pencere yansıması, ince ışık parlaması, kalın dip ve yuvarlak ağız kenarı. Arka duvar da görünür.
- **Kum:** Fizik 2D kesitte çalışır, kesit kavanozun iç duvarına sarılır. Taneler kare ızgarada değil; düzensiz dağılmış (hücresel gürültü), her tane kendi tonunda, ortası ışık alır, kenarı gölgede, bazıları ışıltılı.
- **Kumun üst yüzeyi:** Sütun yüksekliklerinden 3D yüzey; tepeler içeride biraz kabarır, sırt yerine yuvarlak tümsek görünür.
- **Pirinç huni:** İçindeki kum azaldıkça seviyesi düşer.
- **Düşen kum** tane tane 3D noktalar. Düştüğü yerde hafif toz kalkar, doğru yere dökerken ışık parlar.
- **Süsler:** Huninin altında 3D voksel olarak asılı durur. Düşeceği yere kesik çizgi, etrafında geri sayım halkası var. Düşünce camın önündeki kuma gömülür.
- **Final:** Ahşap kapak kapanır, kamera kavanozun çevresinde hafifçe döner ve yaklaşır, ışık camın üstünden geçer, katmanlar alttan üste parlar, konfeti çıkar.
- **Raf:** Şişenin küçük resmi artık 3D görüntüden alınıyor.
- **Arayüz:** Buzlu cam bilgi şeritleri, Nunito yazı tipi, kumlu sıra çubuğu.
- **Renk:** ACES ton eşleme kum renklerini soldurup zeytin yeşiline çeviriyordu; kapatıldı, ışıklar buna göre ayarlandı.
- **Ortam yansıması:** three.js PMREM test tarayıcısında bütün malzemeleri siyah yaptı. Her cihazda çalışsın diye 6 tuvalden küp harita kullanılıyor.

### Puan ve zorluk

- Yeni fizikte kum daha gerçekçi yayıldığı için hiç dokunmayan bot bile 8. bölümde %79 (2 yıldız) aldı.
- Puan aralığı daraltıldı: çizgiye 3 satıra kadar tam puan, 16 satırda sıfır (önce 25).
- Saçılma biraz azaltıldı, kum daha kontrollü.
- Yıldız eşikleri: ★ %58, ★★ %74, ★★★ %86 ve bütün süsler halkada.
- **8. bölüm (Gün batımı):** Dar dipli kadehte ortaya dökmek kendiliğinden düz katman verdiği için katmanlar ortası çukur yaylar oldu ("kenarlara daha çok dök").

### Bot simülasyonu (sürüm 2; bölüm başına 3 koşu: ortalama yüzde ve yıldız)

| Profil | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Hiç dokunmayan | 33 ★0 | 35 ★0 | 32 ★0 | 32 ★0 | 52 ★0 | 37 ★0 | 25 ★0 | 51 ★0 | 26 ★0 | 34 ★0 |
| Süpürücü | 76 ★2 | 61 ★1 | 67 ★1 | 63 ★1 | 54 ★0 | 65 ★1 | 62 ★1 | 74 ★1 | 71 ★1 | 54 ★0 |
| Dağınık | 79 ★2 | 55 ★0,3 | 73 ★1,7 | 63 ★0,7 | 74 ★1,3 | 60 ★0,7 | 72 ★1,7 | 81 ★2 | 61 ★0,7 | 60 ★0,7 |
| İnsan | 86 ★2,3 | 70 ★1,3 | 83 ★2 | 85 ★2,3 | 77 ★2 | 76 ★1,7 | 74 ★1,3 | 79 ★2 | 79 ★1,7 | 70 ★1,3 |
| Kusursuz | 97 ★3 | 91 ★3 | 90 ★3 | 94 ★3 | 89 ★3 | 89 ★3 | 87 ★3 | 95 ★3 | 87 ★3 | 89 ★3 |

- Hiç dokunmayan her bölümde yıldızsız; kusursuz her bölümde 3 yıldız alabiliyor.
- Sürüm 1'e göre daha zor: insan botu ortalama 2-2,7 yerine 1,3-2,3 yıldız alıyor. Süsleri her bölümde tutturuyor.

### Bilinen eksikler ve dürüst notlar

- **Gerçek telefonda ölçülmedi.** Test tarayıcısı yazılımsal çizimle çalışıyor (saniyede birkaç kare); hız ölçümü sadece hesap tarafı için (~2,3 ms). Görüntü telefonda takılırsa ilk düşürülecek şey tane gölgelendiricisi ve fizik geçiş sayısı.
- Kum fiziği 2D kesit. 3D yüzey derinlik boyunca aynı yüksekliği gösteriyor; tepeler sadece görsel olarak yuvarlatıldı.
- İnternetsiz açılırsa (three.js gelmezse) "Bu cihazda 3D grafik açılamadı" yazar. Uygulamaya geçerken three.js pakete gömülecek (Domino Chase'teki gibi).
- Zorluk sürüm 1'den yüksek. Gerçek oyuncu için fazla zor gelirse ilk ayar eşikler (58/74/86).

### Ozer'e sorular (sürüm 2)

1. Grafik istediğin seviyeye geldi mi? Cam, kum tanesi, ışık, masa: en çok hangisi eksik?
2. Kumun kayması, yığılması, cam kenarından akması gerçekçi mi?
3. Telefonda akıcı mı, takılma var mı?
4. Zorluk: 2 yıldız almak zor mu geliyor?
