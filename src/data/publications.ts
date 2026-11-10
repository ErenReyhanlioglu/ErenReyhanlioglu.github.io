import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    venue: "IEEE Access",
    // TODO: repo README'sindeki başlık "...and Instrument Informed Multi-Task Learning" — doğrusunu teyit et
    title:
      "Automatic Guitar Tablature Transcription using Dual-Representation Feature Fusion and Cascaded Multi-Task Learning",
    authors: ["K. Kesimal", "M. E. Reyhanlıoğlu", "O. Gök", "H. Özcan"],
    self: "M. E. Reyhanlıoğlu",
    source: "IEEE Access · under review, 2026",
    links: [
      { label: "Code", href: "https://github.com/ErenReyhanlioglu/Guitar-Transcription" },
      { label: "Weights", href: "https://github.com/ErenReyhanlioglu/Guitar-Transcription-Weights" },
      { label: "Dataset", href: "https://huggingface.co/datasets/MehmetErenn0/guitarset-enriched-npz" },
    ],
  },
  {
    venue: "ISAS 2025",
    title: "Deep Learning versus Machine Learning for Music Genre Classification: A Dual-Dataset Evaluation",
    authors: ["K. Kesimal", "M. E. Reyhanlıoğlu", "H. Özcan"],
    self: "M. E. Reyhanlıoğlu",
    source: "9th International Symposium on Innovative Approaches in Smart Technologies (ISAS), 2025",
    links: [{ label: "Paper", href: "https://ieeexplore.ieee.org/document/11101752/" }],
  },
];
