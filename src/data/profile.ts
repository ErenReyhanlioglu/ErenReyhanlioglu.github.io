import type { Profile } from "./types";

export const profile: Profile = {
  name: "Mehmet Eren Reyhanlıoğlu",
  logo: "Eren Reyhanlıoğlu",
  role: "AI / ML Engineer",
  tagline: "End-to-end ML systems, LLM agents and data pipelines",
  about: [
    "Hi there! I'm Eren, an AI / ML engineer and computer engineer who builds ML systems that run end to end, from data pipelines and model training to deployed APIs with monitoring.",
    "I work across Python, PyTorch, FastAPI, Airflow, dbt, BigQuery, Qdrant and Docker, with CI, tests and evaluation built in from the start.",
    "My recent work covers LLM agents and retrieval, credit risk modelling, real-time computer vision and audio research on guitar tablature transcription.",
  ],
  email: "merenr.oglu@gmail.com",
  phone: { display: "+90 555 160 88 74", tel: "+905551608874" },
  location: "Türkiye",

  // TODO: public/cv.pdf ekleyince "/cv.pdf" yap
  cvUrl: "",
  // TODO: public/images/profile.webp ekleyince "/images/profile.webp" yap
  photoUrl: "",
  // https://formspree.io/f/mrpqzeoz
  formspreeId: "mrpqzeoz",

  // TODO: doldurunca About bölümünde otomatik görünür
  education: [],
  experience: [],

  socials: {
    github: "https://github.com/ErenReyhanlioglu",
    linkedin: "https://www.linkedin.com/in/eren-reyhanl%C4%B1o%C4%9Flu/",
    huggingface: "https://huggingface.co/MehmetErenn0",
    orcid: "https://orcid.org/0009-0006-8842-1193",
    scholar: "https://scholar.google.com/citations?user=hQt6mYQAAAAJ",
  },
};
