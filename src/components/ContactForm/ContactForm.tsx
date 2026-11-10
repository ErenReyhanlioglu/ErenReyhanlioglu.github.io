import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { Container, ContainerSuccess } from "./styles";
import { profile } from "../../data/profile";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FormspreeForm({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email successfully sent!", {
        position: "bottom-left",
        pauseOnFocusLoss: false,
        closeOnClick: true,
        toastId: "succeeded",
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <ContainerSuccess>
        <h3>Thanks for getting in touch!</h3>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSuccess>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="visually-hidden">
          Message
        </label>
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        {/* Spam botları için gizli alan (Formspree honeypot) */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true" />
        <button type="submit" disabled={state.submitting || !EMAIL_PATTERN.test(email) || !message.trim()}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}

/** Formspree ID'si girilmediyse form yerine e-posta butonu gösterir. */
export function ContactForm() {
  if (!profile.formspreeId) {
    return (
      <Container>
        <h2>Get in touch</h2>
        <a className="button mail-fallback" href={`mailto:${profile.email}`}>
          Send me an email
        </a>
      </Container>
    );
  }
  return <FormspreeForm formId={profile.formspreeId} />;
}
