import { createGlobalStyle } from "styled-components";

// Renkler ve tema (koyu varsayılan, <html class="light"> ile açık tema).
export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --card: #2b2b2b;
    --green: #23ce6b;
    --text: #ffffff;
    --bg: var(--black);
    --header-bg: #21212150;
    --footer-bg: var(--card);
    --input-border: #ffffff;
    scroll-padding-top: 10rem;
  }

  :root.light {
    --text: var(--black);
    --bg: #f5f5f5;
    --header-bg: #f5f5f550;
    --footer-bg: rgba(0, 0, 0, 0.1);
    --input-border: var(--black);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg);
    color: var(--text);
    transition: background-color 0.5s, color 0.5s;
  }

  body, input, textarea, button {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  button, .button {
    display: inline-block;
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #ffffff;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  :focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 3px;
  }

  .logo {
    font-size: 3rem;
    color: var(--text);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .skip-link {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2000;
    padding: 1rem 2rem;
    transform: translateY(-200%);
  }

  .skip-link:focus {
    transform: none;
  }

  /* Hareket istemeyen kullanıcılar için animasyonları kapat */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
