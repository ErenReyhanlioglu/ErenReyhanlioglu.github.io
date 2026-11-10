import { Container } from "./styles";
import { ContactForm } from "../ContactForm/ContactForm";
import { profile } from "../../data/profile";
import emailIcon from "../../assets/icons/social/email.svg";
import phoneIcon from "../../assets/icons/social/phone.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Have a project, an idea or a team I could help?</p>
        <p>Let's talk about ML systems, agents or backend work.</p>
      </header>
      <div className="contacts">
        <a href={`mailto:${profile.email}`}>
          <img src={emailIcon} alt="" />
          <span>{profile.email}</span>
        </a>
        <a href={`tel:${profile.phone.tel}`}>
          <img src={phoneIcon} alt="" />
          <span>{profile.phone.display}</span>
        </a>
      </div>
      <ContactForm />
    </Container>
  );
}
