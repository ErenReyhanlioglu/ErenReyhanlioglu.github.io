import type { Skill } from "./types";

import python from "../assets/icons/tech/python.svg";
import pytorch from "../assets/icons/tech/pytorch.svg";
import tensorflow from "../assets/icons/tech/tensorflow.svg";
import scikitlearn from "../assets/icons/tech/scikitlearn.svg";
import fastapi from "../assets/icons/tech/fastapi.svg";
import airflow from "../assets/icons/tech/apacheairflow.svg";
import googlecloud from "../assets/icons/tech/googlecloud.svg";
import postgresql from "../assets/icons/tech/postgresql.svg";
import redis from "../assets/icons/tech/redis.svg";
import docker from "../assets/icons/tech/docker.svg";
import githubactions from "../assets/icons/tech/githubactions.svg";
import typescript from "../assets/icons/tech/typescript.svg";
import react from "../assets/icons/tech/react.svg";
import git from "../assets/icons/tech/git.svg";

// About bölümündeki ikonlar ve arka plandaki parçacıklar bu listeden gelir.
// Yeni ikon: devicon.dev'den SVG'yi src/assets/icons/tech/ altına koy, buraya ekle.
export const skills: Skill[] = [
  { name: "Python", icon: python },
  { name: "PyTorch", icon: pytorch },
  { name: "TensorFlow", icon: tensorflow },
  { name: "scikit-learn", icon: scikitlearn },
  { name: "FastAPI", icon: fastapi },
  { name: "Apache Airflow", icon: airflow },
  { name: "Google Cloud", icon: googlecloud },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Redis", icon: redis },
  { name: "Docker", icon: docker },
  { name: "GitHub Actions", icon: githubactions },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: react },
  { name: "Git", icon: git },
];
