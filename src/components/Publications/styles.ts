import styled from "styled-components";

// Proje kartlarıyla aynı görsel dil: koyu kart, yeşil vurgu, hover'da pembe.
export const Container = styled.section`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .publications {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  .publication {
    padding: 2.4rem 2.4rem;
    background-color: var(--card);
    border-radius: 1.2rem;
    color: #ffffff;
    transition: 0.25s;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    .venue {
      color: var(--green);
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 1.2rem;
    }

    .authors {
      letter-spacing: 0.06rem;
      opacity: 0.8;
      strong {
        font-weight: 700;
      }
    }

    .source {
      font-style: italic;
      opacity: 0.6;
      margin-top: 0.6rem;
    }

    .links {
      display: flex;
      gap: 1rem;
      margin-top: 1.6rem;

      a {
        display: inline-block;
        padding: 0.4rem 1.6rem;
        border: 1px solid var(--green);
        border-radius: 2rem;
        font-size: 1.4rem;
        font-weight: 500;
        transition: background-color 0.25s;

        &:hover {
          background-color: var(--green);
        }
      }
    }

    &:hover .venue {
      color: #ffffff;
    }

    &:hover .links a {
      border-color: #ffffff;
    }
  }

  .scholar {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 2rem;
    color: var(--green);
    font-weight: 500;

    img {
      width: 2.2rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
