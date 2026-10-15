# Sandful

Sandful oyununun deposu (önceki adı Game-Ideas). Telefonda oynanan, oyuncuyu yormadan rahatlatan, akışı olan ve kısa düşündüren oyunlar için fikirler ve prototipler de burada.
Sonraki bir oyun uygulamaya dönüşünce Domino'daki gibi kendi deposuna taşınır.
İlk oyun [Domino Chase](https://github.com/ozerkocak/Domino-Game-) ayrı repoda.

- `TASARIM-ILKELERI.md`: Bütün oyunlar için ortak şartlar, Domino'dan çıkan dersler, ses ve titreşim rehberi.
- `TRENDLER.md`: Ekim 2026 itibarıyla referans alınan oyunlar ve trendler.
- `fikirler/`: Koda dökülmeden önce yazılan fikir taslakları. İlk tur: `fikirler/01-ilk-tur.md`. İkinci tur (Smash Fest! psikolojisinden 4 yön): `fikirler/04-ikinci-tur.md`.
- `prototipler/`: Onaylanan fikirlerin tek dosyalık HTML prototipleri. Telefonda tarayıcıda açılarak oynanır.
  - `01-kum-sisesi.html`: Kum Şişesi, 10 bölüm, 3D (three.js), tane tane kum görüntüsü ve sentezlenmiş kum sesi. Tasarım ve bot sonuçları: `fikirler/02-kum-sisesi.md`.
- `uygulamalar/`: Uygulamaya dönüşen oyunlar (Capacitor; iOS ve Android).
  - `sandful/`: Sandful (Kum Şişesi prototipinin uygulama adı) uygulama paketi. Global: İngilizce ve Türkçe. TestFlight'a çıkış (Mac'te Xcode): `uygulamalar/sandful/TESTFLIGHT.md`. Yedek bulut derleme: kökteki `codemagic.yaml`.
