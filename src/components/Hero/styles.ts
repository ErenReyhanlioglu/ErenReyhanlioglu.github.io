import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;

  .hero-text {
    & > div > p {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 7rem;
      line-height: 1.1;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
      object-fit: contain;
    }
  }

  .button {
    padding: 1.4rem 6rem;
  }

  .hero-image img {
    max-width: 500px;
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;

    .hero-text h1 {
      font-size: 5rem;
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;

    .hero-text h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }
`;
