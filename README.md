# ErenReyhanlioglu.github.io

Kişisel portföy sitesi: https://erenreyhanlioglu.github.io

React 19 + TypeScript + Vite + styled-components.

## Komutlar

```sh
npm install       # bağımlılıkları kur
npm run dev       # http://127.0.0.1:5173
npm run build     # dist/ klasörüne derle
npm run preview   # derlenmiş siteyi önizle
npm run lint
```

## Yayınlama

`main`'e her push'ta [.github/workflows/deploy.yml](.github/workflows/deploy.yml) siteyi
lint'ler, derler ve GitHub Pages'e yayınlar.

Tek seferlik ayar: repo **Settings → Pages → Source: GitHub Actions**.

## Dosya yapısı

```
.
├── index.html                  # HTML kabuğu, meta etiketleri, font
├── public/                     # Olduğu gibi kopyalanan dosyalar (favicon, cv.pdf, images/)
├── src/
│   ├── main.tsx                # Giriş noktası
│   ├── App.tsx                 # Header + Main + Footer
│   ├── data/                   # ← SİTENİN TÜM İÇERİĞİ BURADA
│   │   ├── profile.ts          # İsim, unvan, hakkımda, iletişim, eğitim, deneyim, CV, form ID
│   │   ├── projects.ts         # Proje kartları
│   │   ├── publications.ts     # Yayınlar
│   │   ├── skills.ts           # Beceri ikonları (About + arka plan parçacıkları)
│   │   ├── socials.ts          # Sosyal medya ikonları
│   │   └── types.ts            # İçerik tipleri
│   ├── components/             # Her bölüm kendi klasöründe: Bileşen.tsx + styles.ts
│   │   ├── Header/  Hero/  About/  Projects/  Publications/
│   │   ├── Contact/  ContactForm/  Footer/
│   │   └── Main/  ParticlesBackground/  ScrollAnimation/  SocialLinks/
│   ├── hooks/                  # usePrefersReducedMotion
│   ├── styles/global.ts        # Renkler, açık/koyu tema, genel stiller
│   └── assets/                 # illustration.svg, icons/social, icons/tech
└── .github/workflows/deploy.yml
```

## Sık yapılan işler

- **Proje eklemek / düzenlemek:** `src/data/projects.ts` içine bir obje ekle.
  İlk link ana linktir; GitHub linkleri GitHub ikonuyla, diğerleri dış link ikonuyla gösterilir.
- **Yayın eklemek:** `src/data/publications.ts`.
- **Beceri ikonu eklemek:** [devicon.dev](https://devicon.dev)'den SVG'yi `src/assets/icons/tech/` altına koy, `src/data/skills.ts`'e ekle.
- **Renkleri değiştirmek:** `src/styles/global.ts` içindeki `:root` değişkenleri.

## Doldurulacaklar

`src/data/` içinde `TODO` diye aranınca hepsi çıkar:

- [ ] Fotoğraf: `public/images/profile.webp` → `photoUrl: "/images/profile.webp"`
- [ ] CV: `public/cv.pdf` → `cvUrl: "/cv.pdf"` (boşken Resume butonu gizli)
- [ ] Eğitim ve deneyim: `profile.ts` → `education`, `experience`
- [ ] IEEE makale başlığını teyit et (`publications.ts`)
- [ ] SeekBind write-up, Obur mimari notları, ISAS PDF / BibTeX linkleri
