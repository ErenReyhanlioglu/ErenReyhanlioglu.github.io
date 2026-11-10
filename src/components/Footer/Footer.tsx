import { Container } from "./styles";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { profile } from "../../data/profile";
import reactIcon from "../../assets/icons/tech/react.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="#home" className="logo">
        <span>{"<"}</span>
        <span>{profile.logo}</span>
        <span>{"/>"}</span>
      </a>
      <div className="credits">
        <p>
          Built with React, TypeScript, and Vite <img src={reactIcon} alt="" />
        </p>
        <p className="design-credit">
          Design based on{" "}
          <a href="https://github.com/CodeVinayak/Portfolio-v2" target="_blank" rel="noreferrer">
            Vinayak Singh's Portfolio-v2
          </a>
        </p>
      </div>
      <SocialLinks />
    </Container>
  );
}
