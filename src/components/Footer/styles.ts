import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--footer-bg);
  color: var(--text);
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: background-color 0.5s;

  .logo {
    font-size: 2.8rem;
  }

  .credits p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
    }
  }

  @keyframes spinning {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1100px) {
    padding: 4rem 10rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;

    .credits p {
      font-size: 1.2rem;
      flex-wrap: wrap;
    }
  }
`;
