import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      width: 60rem;
      max-width: 100%;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      background: none;
      border: 1px solid var(--input-border);
      color: var(--text);
      font-weight: 600;
      transition: border-color 0.5s, color 0.5s;

      &::placeholder {
        color: var(--text);
      }

      &:focus-visible {
        border-color: var(--green);
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  }

  .mail-fallback {
    padding: 1rem 6rem;
    text-transform: uppercase;
  }

  @media (max-width: 740px) {
    form input,
    form textarea {
      width: 100%;
    }
  }
`;

export const ContainerSuccess = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    color: #fbfbfb;
  }
`;
