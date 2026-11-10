import { profile } from "./profile";

import github from "../assets/icons/social/github.svg";
import linkedin from "../assets/icons/social/linkedin.svg";
import huggingface from "../assets/icons/social/huggingface.svg";
import orcid from "../assets/icons/social/orcid.svg";
import scholar from "../assets/icons/social/googlescholar.svg";

// Hero ve footer'daki sosyal ikonlar, bu sırayla.
export const socialLinks = [
  { name: "LinkedIn", href: profile.socials.linkedin, icon: linkedin },
  { name: "GitHub", href: profile.socials.github, icon: github },
  { name: "Hugging Face", href: profile.socials.huggingface, icon: huggingface },
  { name: "ORCID", href: profile.socials.orcid, icon: orcid },
  { name: "Google Scholar", href: profile.socials.scholar, icon: scholar },
];
