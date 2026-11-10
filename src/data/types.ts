// Sitedeki tüm içerik tiplerinin tek tanım yeri.

export type Link = {
  label: string;
  href: string;
};

export type TimelineItem = {
  title: string; // Bölüm / pozisyon
  place: string; // Okul / şirket
  period: string; // Örn. "Sep 2021 – Jun 2025"
  detail?: string; // Örn. GPA, şehir
};

export type Profile = {
  name: string;
  logo: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  phone: { display: string; tel: string };
  location: string;
  /** public/ altındaki dosya yolu, örn. "/cv.pdf". Boşsa Resume butonu gizlenir. */
  cvUrl: string;
  /** public/ altındaki fotoğraf yolu, örn. "/images/profile.webp". Boşsa illüstrasyon gösterilir. */
  photoUrl: string;
  /** https://formspree.io formunun ID'si (örn. "xyzabcd"). Boşsa form yerine e-posta butonu gösterilir. */
  formspreeId: string;
  education: TimelineItem[];
  experience: TimelineItem[];
  socials: { github: string; linkedin: string; huggingface: string; orcid: string; scholar: string };
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  /** İlk link kartın ana linkidir. GitHub linkleri GitHub ikonuyla, diğerleri dış link ikonuyla gösterilir. */
  links: Link[];
};

export type Publication = {
  venue: string;
  title: string;
  authors: string[];
  /** authors içindeki kendi adın, kalın gösterilir. */
  self: string;
  source: string;
  links: Link[];
};

export type Skill = {
  name: string;
  icon: string;
};
