# Sandful · TestFlight'a çıkış rehberi

Bu klasör oyunun iOS ve Android uygulama paketidir (Capacitor 8, Domino Chase'teki `uygulama/` ile aynı yapı).
Oyunun tek kaynağı `prototipler/01-kum-sisesi.html`; `npm run build` onu `www/` altına kopyalar ve three.js'i pakete gömer.
Uygulama internetsiz çalışır.

## Uygulamada neler var

| Konu | Durum |
|---|---|
| İlk açılış | Doğrudan 1. bölüm; elle sürükleme ipucu ve "Basılı tut: kum akar" yazısı |
| Sonraki açılışlar | Raf (bölümler, yıldızlar, bitmiş şişelerin küçük resimleri); sıradaki bölümden devam |
| Bölümler | 10 bölüm; bir bölümü açmak için öncekinden en az 1 yıldız |
| Dil | Sadece Türkçe |
| Ses | Sentezlenen kum sesi (rafta seçilir: Tıpırtı, Kadife, İnce), melodi ve ortam. Rafta "Ses" ve "Müzik" ayrı kapatılır |
| Sessiz anahtar | iPhone sessizdeyse oyun sesi çıkmaz (oyunlarda olağan davranış). Arkada çalan müzik kesilmez, oyunla karışır |
| Titreşim | iPhone titreşim motoru: kum düşerken en hafif "seçim" tıkları, kayma ve renk değişiminde hafif, kapakta ve yıldızlarda güçlü |
| Kayıt | Yıldızlar, en iyi yüzde, ayarlar cihazda saklanır (iOS'un silebileceği tarayıcı deposu yerine uygulama tercihleri) |
| Reklam, satın alma, hesap | Yok. Hiç veri toplanmaz |

Varsayılanlar:

| Ayar | Değer |
|---|---|
| Uygulama adı | Sandful (App Store başlığı: "Sandful: Kum Sanatı") |
| Paket kimliği (Bundle ID) | `com.investateknoloji.sandful` |
| Sürüm | 1.0 (derleme numarası Codemagic'te otomatik artar) |
| Cihaz | Sadece iPhone, dikey, tam ekran |
| Ekip | İnvesta Teknoloji (`3ANJ967SS2`) |

## Senin yapacakların

Apple Developer hesabı ve Codemagic, Domino Chase'ten hazır. Yeni olan: Bundle ID, uygulama kaydı ve imza profili.

### 1. Bundle ID

developer.apple.com > Certificates, Identifiers & Profiles > Identifiers > **+** > App IDs > App.
Açıklama: Sandful, Bundle ID: `com.investateknoloji.sandful` (Explicit). Ek yetenek seçmen gerekmez.

### 2. App Store Connect'te uygulama kaydı

1. appstoreconnect.apple.com > Uygulamalar > **+** > Yeni Uygulama.
   Platform iOS, ad **Sandful: Kum Sanatı**, birincil dil **Türkçe**, Bundle ID yukarıdaki, SKU: `sandful`.
   - Ad App Store'da görünen başlıktır (en fazla 30 karakter); telefonda ikonun altında sadece **Sandful** yazar.
   - İsim alınmışsa App Store Connect hemen söyler. "Sandful: Rahatlatan Kum Sanatı" dene ve bana yaz.
2. Uygulama Bilgileri sayfasındaki **Apple Kimliği**'ni (10 haneli sayı) bana yaz. `codemagic.yaml` içindeki `APP_STORE_APPLE_ID` alanına işleyeceğim.

### 3. Codemagic

1. codemagic.io > **Add application** > GitHub > `ozerkocak/Game-Ideas` deposunu seç (yapılandırma: codemagic.yaml).
2. App Store Connect anahtarı Domino Chase için **DominoChase** adıyla eklenmişti; aynı Apple ekibi olduğu için yeniden eklemen gerekmez.
   Farklı bir ad verdiysen bana yaz, `codemagic.yaml`'da değiştireyim.
3. Team settings > **Code signing identities** > iOS provisioning profiles > **Fetch profiles**:
   `com.investateknoloji.sandful` için App Store profili gelmezse önce developer.apple.com > Profiles > **+** > App Store Connect >
   App ID olarak Sandful'u ve Domino'daki Apple Distribution sertifikasını seçip profili oluştur, sonra tekrar Fetch.
4. Codemagic'te uygulamayı aç > **Start new build** > dal: `claude/clever-wright-10sbmw`, iş akışı: **Sandful · iOS → TestFlight**.
   Derleme 10-20 dakika sürer ve bitince otomatik TestFlight'a yüklenir.

### 4. TestFlight

1. App Store Connect > Sandful > **TestFlight**. Yeni derleme birkaç dakika "işleniyor" görünür.
2. Şifreleme sorusu çıkmaz (uygulama ayarlarında "standart dışı şifreleme yok" işaretli).
3. **İç test**: ekibindeki App Store Connect kullanıcılarını ekle; inceleme beklemeden dener.
4. **Dış test**: bir grup oluştur, derlemeyi ekle, `magaza/testflight-metinleri.md`'deki metinleri gir.
   İlk dış derleme kısa bir Apple incelemesinden geçer (genelde 1 gün). Sonra herkese açık bağlantı oluşturup paylaşabilirsin.

## Alternatif: Mac'te Xcode ile yükleme (Codemagic gerekmez)

### Bir kerelik kurulum

1. Mac App Store'dan **Xcode**'u kur, Xcode > Settings > **Accounts**'tan Apple ID ile giriş yap.
2. nodejs.org'dan **Node.js LTS** sürümünü kur.
3. **GitHub Desktop**'ta File > Clone Repository > `ozerkocak/Game-Ideas` > Clone (varsayılan klasör `~/Documents/GitHub/Game-Ideas`).
4. Üstteki **Current Branch** menüsünden `claude/clever-wright-10sbmw` dalını seç.

### Her yeni sürümde

1. GitHub Desktop'ta **Fetch origin**, ardından **Pull origin**.
   Sol tarafta "Changes" listesinde dosya görünürse (Xcode bazen proje dosyasını değiştirir): sağ tık > **Discard All Changes**, sonra Pull.
2. Terminal'de:
   ```bash
   cd ~/Documents/GitHub/Game-Ideas/uygulamalar/sandful
   sh scripts/ios-hazirla.sh
   ```
   Paketleri kurar, oyunu uygulamaya kopyalar ve Xcode'u açar.
3. Xcode'da cihaz olarak **Any iOS Device (arm64)** seç > **Product > Archive** > **Distribute App > App Store Connect > Distribute**.
   Her yüklemede derleme numarası bir öncekinden büyük olmalı: Xcode'da App hedefi > General > **Build** alanını 1 artır.
4. 10-30 dakika sonra TestFlight'ta görünür.

## Android deneyiciler için

Codemagic'te **Sandful · Android test APK** iş akışını çalıştır. Çıkan `.apk`, Google Play hesabı olmadan
"bilinmeyen kaynaklardan yükleme" izniyle Android telefonlara kurulabilir.

## Geliştirici notları

```bash
cd uygulamalar/sandful
npm ci
npm run build      # prototipler/01-kum-sisesi.html → www/index.html (three.js gömülü, dış adres yok)
npx cap sync       # www/ → ios ve android projelerine
npm run native     # ios/ ve android/ projelerini sıfırdan üretir, iOS ayarlarını ve ikonları uygular
```

- iOS projesi Swift Package Manager kullanır (CocoaPods yok). Mac'te `npx cap open ios` ile Xcode'da açılır.
- Oyunda değişiklik yapınca sadece `prototipler/01-kum-sisesi.html` düzenlenir; Codemagic her derlemede `www/`'yi yeniden üretir.
- İkon ve açılış ekranı `scripts/make-icon.py` ile çizilir (`resources/`), `npm run assets` bütün boyutları üretir.
