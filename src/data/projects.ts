import type { Project } from "./types";

// Sıra = sitedeki sıra. Yeni proje eklemek için listeye bir obje ekle.
export const projects: Project[] = [
  {
    title: "TraceMail",
    description:
      "A pipeline that reads my own inbox every hour, extracts job alerts and application updates into BigQuery and tracks every application to its current stage on a public health panel. LLM fit scores for each posting, served through Cloudflare Workers AI and compared in MLflow, are being added next.",
    tech: ["Airflow", "dbt", "BigQuery", "FastAPI", "Next.js", "Docker", "GitHub Actions", "Workers AI", "MLflow"],
    links: [
      { label: "Code", href: "https://github.com/ErenReyhanlioglu/tracemail" },
      { label: "tracemail.com.tr", href: "https://tracemail.com.tr" },
    ],
  },
  {
    title: "FraudLens",
    description:
      "Multi-agent AML investigation: an XGBoost detector flags transactions, LangGraph agents explain them with SHAP and cite BDDK and FATF rules through RAG.",
    tech: ["XGBoost", "SHAP", "LangGraph", "Claude API", "Qdrant", "MLflow", "Docker"],
    links: [
      { label: "Code", href: "https://github.com/ErenReyhanlioglu/fraudlens" },
      { label: "Live demo", href: "https://huggingface.co/spaces/MehmetErenn0/fraudlens" },
    ],
  },
  {
    title: "Review Radar",
    description:
      "Review analytics platform over Apollo.io’s G2 reviews: reviews are indexed in Qdrant and product questions are answered through Claude tool calling.",
    tech: ["FastAPI", "React", "TypeScript", "Qdrant", "PostgreSQL", "Claude API"],
    links: [{ label: "Code", href: "https://github.com/ErenReyhanlioglu/review-radar" }],
  },
  {
    title: "SeekBind",
    description:
      "Natural-language service search and appointment suggestions for the DateBind platform, built at TechBind Solutions. Hybrid search on Qdrant, evaluated with RAGAS ablations, shipped with CI, 99% test coverage and strict type checking.",
    tech: ["FastAPI", "Qdrant", "BM25 hybrid search", "OpenAI API", "RAGAS", "Langfuse", "Redis"],
    // TODO: write-up linki olunca ekle
    links: [{ label: "Code", href: "https://github.com/ErenReyhanlioglu/seekbind" }],
  },
  {
    title: "Guitar Tablature Transcription",
    description:
      "Cascaded multi-task model fusing HCQT and Mel representations to transcribe guitar audio into tablature, reaching a tablature F1 of 0.776 and a disambiguation rate of 0.943 on GuitarSet. Started during my internship and carried on as a funded research project.",
    tech: ["PyTorch", "torchaudio", "librosa", "HCQT + Mel", "Multi-task learning"],
    links: [
      { label: "Code", href: "https://github.com/ErenReyhanlioglu/Guitar-Transcription" },
      { label: "Weights", href: "https://github.com/ErenReyhanlioglu/Guitar-Transcription-Weights" },
    ],
  },
  {
    title: "Credit Risk Scorecard",
    description:
      "Basel-style PD scorecard on Home Credit data: seven tables merged to customer level, 434 features reduced to 39 with WoE/IV and VIF checks.",
    tech: ["Pandas", "statsmodels", "scikit-learn", "optbinning", "WoE/IV", "PSI monitoring"],
    links: [{ label: "Code", href: "https://github.com/ErenReyhanlioglu/Credit_Risk_Analysis" }],
  },
  {
    title: "TID Realtime",
    description:
      "Webcam recognition of 30 Turkish Sign Language words with MediaPipe Holistic landmarks and a BiLSTM with masked attention.",
    tech: ["TensorFlow / Keras", "MediaPipe", "OpenCV", "BiLSTM", "Attention"],
    links: [{ label: "Code", href: "https://github.com/ErenReyhanlioglu/tid_realtime" }],
  },
  {
    title: "Obur",
    description:
      "Taste-based social platform for restaurants, cafés and bars. One API-first backend that will serve both the Flutter app and the Next.js web client.",
    tech: ["FastAPI", "PostgreSQL + PostGIS", "SQLAlchemy (async)", "Redis", "Docker", "GitHub Actions"],
    links: [{ label: "Code", href: "https://github.com/oburapp" }],
  },
];
