import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <a className="skip-link button" href="#main">
        Skip to content
      </a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
