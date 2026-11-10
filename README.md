# ErenReyhanlioglu.github.io

Kişisel portföy sitesi: https://erenreyhanlioglu.github.io

Düz HTML + CSS. Build adımı, framework veya JavaScript yok. GitHub Pages `main` dalının kökünden yayınlar.

## Dosya yapısı

```
.
├── index.html              # Tek sayfalık site (tüm içerik burada)
├── 404.html                # Bulunamayan sayfa
├── assets/
│   ├── css/
│   │   ├── tokens.css      # Renk, font, ölçü değişkenleri — tasarım ayarları buradan
│   │   ├── base.css        # Reset, tipografi, erişilebilirlik varsayılanları
│   │   ├── layout.css      # Container, header, bölümler, hero, grid
│   │   └── components.css  # Button, card, badge, tags, publication, contact
│   └── img/
│       ├── favicon.svg
│       └── projects/       # Proje ekran görüntüleri (webp, ~960px genişlik)
├── .nojekyll               # GitHub Pages'in Jekyll işlemesini kapatır
├── .editorconfig
├── .gitattributes
└── .gitignore              # mock-design/ yerelde kalır, repoya girmez
```

CSS dosyaları `index.html` içinde bu sırayla yüklenir: tokens → base → layout → components.

## Yerelde çalıştırma

```sh
uv run --no-project python -m http.server 8000
```

Sonra http://localhost:8000 adresini aç.

## Sık yapılan işler

- **Yeni proje eklemek:** `index.html` içinde `#work` bölümündeki bir `<article class="card">` bloğunu kopyala, içeriği değiştir.
  - Durum etiketi: `badge--live`, `badge--demo`, `badge--internship`, `badge--research`, `badge--progress`
  - Kartın tüm satırı kaplaması için: `card card--wide`
- **Yeni yayın eklemek:** `#research` içindeki bir `<li class="pub">` bloğunu kopyala.
- **Renkleri / fontu değiştirmek:** sadece `assets/css/tokens.css`.

## Doldurulacaklar

`index.html` içinde `TODO` diye aranınca hepsi çıkar:

- [ ] Google Scholar linki
- [ ] FraudLens canlı demo linki
- [ ] SeekBind write-up linki
- [ ] Obur mimari notları linki
- [ ] TraceMail ekran görüntüsü → `assets/img/projects/tracemail.webp`
- [ ] ISAS 2025 makale başlığı, konferansın tam adı, PDF / BibTeX
- [ ] Paylaşım görseli (`og:image`, 1200×630)
