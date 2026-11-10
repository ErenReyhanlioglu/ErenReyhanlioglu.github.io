import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    > div {
      height: 100%;
    }
  }

  .project {
    padding: 2rem 1.8rem;
    background-color: var(--card);
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #ffffff;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.6rem;

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a > img {
        width: 5rem;
        display: block;
      }
    }

    h3 {
      margin-bottom: 2rem;
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.8rem 2rem;
        font-size: 1.4rem;
        opacity: 0.6;
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
