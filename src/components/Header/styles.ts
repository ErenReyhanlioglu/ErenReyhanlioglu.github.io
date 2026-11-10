import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: var(--header-bg);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.5s;

  .logo {
    white-space: nowrap;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: var(--text);
      padding: 0.6rem;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button {
        padding: 0.6rem 2rem;
        color: #ffffff;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  /* Hamburger menü (sadece mobilde görünür) */
  .menu {
    width: 2rem;
    height: 0.2rem;
    padding: 0;
    border-radius: 0;
    background: var(--text);
    position: relative;
    display: none;

    &:hover {
      filter: none;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: var(--text);
      transition: 0.6s;
    }

    &::before {
      bottom: 0.5rem;
    }

    &::after {
      top: 0.5rem;
    }

    &.active {
      background-color: transparent;
    }

    &.active::before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active::after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  /* Tema düğmesi */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    overflow: hidden;
    flex-shrink: 0;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  label::after {
    content: "";
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  input:focus-visible + label {
    outline: 2px solid var(--green);
    outline-offset: 3px;
  }

  @media (max-width: 1100px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
      margin-left: 1rem;
      z-index: 1001;
    }

    nav {
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a {
        color: #ffffff;
      }

      a.button {
        background-color: var(--pink);
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media (max-width: 480px) {
    .logo {
      font-size: 2.2rem;
    }
  }
`;
