# CLAUDE.md

Rahatlatan, akışı olan, kısa düşündüren mobil oyun fikirleri ve prototipleri. Sahibi: Ozer (İnvesta Teknoloji).
İlk oyun Domino Chase ayrı bir repoda (`ozerkocak/Domino-Game-`); oradan çıkan dersler bu repoya taşındı.

## Önce oku

- `TASARIM-ILKELERI.md`: Bütün oyunlar için değişmeyen şartlar, Domino'dan çıkan dersler, reddedilmiş yönler, ses ve titreşim rehberi.
  Yeni fikir önermeden önce mutlaka oku; reddedilmiş yönleri tekrar önerme.
- `TRENDLER.md`: Referans alınan güncel oyunlar ve her birinden ne alınıp ne alınmayacağı.
- `fikirler/`: Fikir turları ve Ozer'in seçimleri.

## Çalışma şekli

- Konuşma dili Türkçe.
- Yeni bir oyun fikrini koda dökmeden önce tek sayfalık bir açıklama yaz (`fikirler/`) ve Ozer'in onayını al.
  Onaylanmış bir fikri geliştirirken sıfırdan yazmak yerine mevcut dosyayı adım adım iyileştir.
- Her geri bildirimi ve verilen kararı ilgili fikir dosyasına ve gerekirse `TASARIM-ILKELERI.md`'ye işle.
- Prototipler `prototipler/NN-isim.html` altında tek dosyalık HTML'dir (numara bütün oyunlar arasında sıralı); telefonda tarayıcıda açılarak oynanır.
- 3D prototipler three.js r128 kullanır (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`).
- Ses Web Audio ile sentezlenir. Titreşim tarayıcıda `navigator.vibrate`, uygulamada Capacitor Haptics ile yapılır (iOS Safari `vibrate` desteklemez).
  iPhone'da Web Audio ilk dokunuşta sessiz kalabilir: Domino Chase'teki `htmlAudioUnlock` gibi kısa bir sessiz WAV çal, sesi her dokunma aşamasında (pointerup/touchend/click) açmayı dene.
- Uygulamaya dönüşen oyun `uygulamalar/<oyun-adi>/` altına Capacitor paketi olarak girer (Domino Chase'teki `uygulama/` yapısı örnek alınır).

## Test

- Headless Chromium + Playwright çalışır, ama SwiftShader ile ~3 FPS verir; oyun saati yavaş akar.
  Bu yüzden prototiplerde `window.__game` test kancaları bulunur (`setTS(0)` ile gerçek zamanı durdur, `sim(ms)` ile mantığı ilerlet, `state()` ile durumu oku).
- CDN bulut ortamında engelli olabilir. three.js'i `npm install three@0.128.0` ile kurup Playwright'ta `page.route` ile yerel dosyaya yönlendir.
- WebGL'li ekran görüntüsü için Chromium'u `--use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist` ile aç. Botlar ve mantık testi için three.js isteğini `route.abort()` ile kes; oyun 3D'siz de çalışır.
- SwiftShader'da three.js PMREM ortam yansıması (`PMREMGenerator`) bütün PBR malzemeleri siyah yapıyor; bazı telefonlarda da olabilir. Yansıma için 6 tuvalden `CubeTexture` kullan.
- Sesi dinleyemediğin için spektrumunu ölç (sentez kodunu Node'da çalıştır, merkez frekans ve 500 Hz altı enerji). Gerekirse örnek WAV yaz.
- Zorluk ayarı için farklı oyuncu profilleriyle (hiç dokunmayan, kusursuz, insan gibi geç kalan, dağınık) bot simülasyonu çalıştır.
  Bölümler ilk başta kolay olmalı; zorluk ilerleyen bölümlerde açılmalı ve strateji fark yaratmalı.
