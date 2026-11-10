import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;

    h2 {
      font-size: 4rem;
    }

    p {
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      color: var(--black);
      font-weight: 500;
      transition: background-color 0.25s, color 0.25s;

      img {
        width: 4rem;
      }

      &:hover {
        background-color: var(--pink);
        color: #ffffff;
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;

      a {
        width: 100%;
      }
    }
  }
`;
