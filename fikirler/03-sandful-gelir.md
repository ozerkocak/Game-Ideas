# 03 · Sandful gelir modeli (öneri, Ozer'in onayına)

> Ozer: "Oyunda para kazanılacak bir bölüm de eklemek lazım sanki. Mantığı nasıl olur bilmiyorum ama reklam vs veya oyun içi satın alma."

Şu an oyunda reklam ve satın alma yok. Öneri, Domino Chase'te kararlaştırılan modeli (ödüllü reklam, seyrek geçiş reklamı, "reklamları kaldır")
rahatlatma hedefine göre yumuşatıp üstüne **sahne paketleri** eklemek. Sandful bir boyama oyununa benziyor: bu türde para, yeni içerik ve reklamsızlık satarak kazanılıyor.

## Kural: para kazanma rahatlamayı bozmaz

- Döküş sırasında hiçbir şey çıkmaz. Reklam sadece bölüm bittikten sonra, oyuncu "Sonraki"ye bastığında gelebilir.
- Banner (ekranın altında duran reklam) yok: sahneyi bozar.
- Oyuncu sıkıştırılmaz: bölüm zorlaştırılıp "geç" satılmaz, yıldız satılmaz (Domino'daki kural).
- İlk 3 bölümde hiç reklam yok; oyuncu önce oyunu sever.

## Önerilen model

| Kaynak | Ne | Nerede, ne sıklıkta |
|---|---|---|
| **Ödüllü reklam** (oyuncu ister) | "Son katmanı geri al": son dökülen rengi kaldırıp yeniden dökme | Bölüm içinde, ↶ düğmesi. Bölüm başına 1 kez ücretsiz, sonrası reklamla |
| | "+1 üfleme" (üflemeli bölümlerde) | Üfleme hakkı bitince |
| | "Kusursuz şişeyi duvar kâğıdı yap": bitmiş şişenin yüksek çözünürlüklü resmini fotoğraflara kaydet | Sonuç ekranında |
| **Geçiş reklamı** | Tam ekran, 5 sn sonra kapatılabilir | 4. bölümden sonra, bölüm sonunda; en az 3 dakikada bir, arka arkaya iki bölümde bir |
| **Reklamları kaldır** | Tek seferlik satın alma, yaklaşık 3,99 $ | Raf ve geçiş reklamından sonra küçük bir teklif |
| **Sahne paketleri** | Her biri 10 yeni sahne + yeni cam şekli: Okyanus, Dört Mevsim, Dünya Şehirleri, Gece Gökyüzü | İlk 10 bölüm ücretsiz. Paket başına yaklaşık 1,99 $ |
| **Sandful+** | Bütün paketler (gelecek paketler dahil) + reklamsız | Tek seferlik, yaklaşık 7,99 $ |

Fiyatlar örnek. App Store her ülkede kendi kademesini uygular (Türkiye'de TL kademesi).

Abonelik önermiyorum: rahatlatan bir oyunda "her ay ödeme" itici, tek seferlik satın almalar daha samimi duruyor. İleride içerik çoğalınca tekrar bakılabilir.

## Neden bu model

- **Reklam geliri ilk günden başlar**, satın alma için içerik gerekir. Ödüllü reklam, oyuncunun zaten istediği şeyi (geri alma, duvar kâğıdı) verir; zorla izletilmez.
- **Sahne paketleri** oyunun doğal büyüme yolu: yeni sahne = yeni içerik = geri dönüş sebebi. Satın almayan da ilk 10 sahneyi sınırsız oynar.
- **Reklamları kaldır + Sandful+**: reklamdan rahatsız olan sakin oyuncu kitlesi bunu satın almaya en yatkın kitle.

## Ne gerekiyor

| İş | Kim | Not |
|---|---|---|
| Reklam: Google AdMob (Capacitor eklentisi) | Ben | AB/İngiltere için onay penceresi (Google UMP), iPhone'da "takip izni" penceresi (ATT) |
| Satın alma: StoreKit (Capacitor eklentisi), "Satın alımları geri yükle" düğmesi | Ben | Apple geri yükleme düğmesini zorunlu tutar |
| Yeni özellikler: geri alma, duvar kâğıdı kaydetme, paket rafı, 10 yeni sahne (ilk paket) | Ben | Bot testleri ve zorluk ayarı dahil |
| AdMob hesabı ve uygulama kimliği | Ozer | Domino için açıldıysa aynı hesap |
| App Store Connect > Business: **Ücretli Uygulamalar Sözleşmesi**, banka ve vergi bilgileri | Ozer | Satın alma için şart. Domino için yapıldıysa tekrar gerekmez |
| Gizlilik politikası ve App Store gizlilik beyanı güncellemesi | Ben (metin), Ozer (yayın) | "Veri toplanmıyor" yerine reklam verisi beyanı |
| Yaş anketinde "reklam var" cevabı | Ozer | Sonuç yine 4+ |

Domino Chase'te de reklam yerleri hazır ama gerçek reklam bağlı değil. Reklam ve satın alma katmanını bir kez yazıp iki oyunda kullanabiliriz.

## Zamanlama (karar Ozer'in)

- **A (önerim):** 1.0 şimdi reklamsız yayına girer; mağaza sayfası, ilk yorumlar ve App Store Connect verileri birikmeye başlar.
  1.1 (yaklaşık 2-3 hafta) reklam, satın alma, geri alma, duvar kâğıdı ve ilk sahne paketiyle gelir.
- **B:** Yayını bekletip 1.0'ı doğrudan para kazanmalı çıkarmak.

## Ozer'in cevapları (13 Ekim 2026)

1. Model: "Farklı fikirler buluruz." Yukarıdaki model kesin değil; aşağıdaki alternatiflerle birlikte yeniden konuşulacak.
2. Zamanlama: **A**. 1.0 reklamsız incelemeye gönderildi; reklam ve satın alma 1.1'de.
3. Domino için AdMob hesabı açılmadı. 1.1 için açılacak (Ozer, şirketin Google hesabıyla).

## Alternatif fikirler (konuşulacak)

| Fikir | Nasıl para kazandırır | Not |
|---|---|---|
| **Serbest atölye**: kendi şişeni tasarla (renk, cam, süs seç) | Ek renk paletleri, cam şekilleri, süsler satılır ya da ödüllü reklamla açılır | Bölüm üretmeden içerik sağlar; paylaşılabilir eser çıkar |
| **Günün şişesi**: her gün yeni bir sahne | Kaçırılan günü ödüllü reklamla açma; seri ödülü | Geri dönüş sebebi; içerik takvimi gerekir |
| **Kozmetik koleksiyon**: masa, arka plan, kapak, huni temaları | Tek tek ya da paket satış | Oynanışı değiştirmez, rahatlatma bozulmaz |
| **Sezon paketleri**: yılbaşı, bahar, cadılar bayramı, Ramazan | Sınırlı süreli paket | Mağazada öne çıkma fırsatı |
| **Duvar kâğıdı / paylaşım**: bitmiş şişeyi yüksek çözünürlükte kaydet, video olarak paylaş | Ödüllü reklam ya da Sandful+ | Paylaşılan her video reklam gibi çalışır |

## Açık sorular (ilk tur)

1. Model uygun mu? Çıkarmak ya da eklemek istediğin bir şey var mı (ör. sadece reklam, ya da sadece satın alma)?
2. Zamanlama A mı, B mi?
3. Domino için AdMob hesabı ve Ücretli Uygulamalar Sözleşmesi yapıldı mı?
