import { useEffect, useState } from "react";
import { Container } from "./styles";
import { profile } from "../../data/profile";

const THEME_KEY = "theme";

function readStoredTheme(): "light" | "dark" {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(readStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // depolama kapalıysa tema sadece bu oturumda geçerli
    }
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Container className="header-fixed">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span>{"<"}</span>
        <span>{profile.logo}</span>
        <span>{"/>"}</span>
      </a>

      <input
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
        checked={theme === "light"}
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
      />
      <label htmlFor="switch">Toggle light theme</label>

      <nav id="site-nav" className={menuOpen ? "active" : ""} aria-label="Sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        {profile.cvUrl && (
          <a href={profile.cvUrl} download className="button">
            Resume
          </a>
        )}
      </nav>

      <button
        type="button"
        className={menuOpen ? "menu active" : "menu"}
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      />
    </Container>
  );
}
