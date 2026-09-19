import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Search Pokémon", href: "#search" },
  { label: "Pokémon Gallery", href: "#gallery" },
  { label: "Battle Simulator", href: "#battle" },
  { label: "About", href: "#about" },
];

function Header() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash.replace("#", ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home">
        Pika Battle Lab
      </a>

      <nav className="site-nav" aria-label="Primary">
        <ul className="nav-list">
          {navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeHash === sectionId;
            return (
              <li key={item.href}>
                <a
                  className={`nav-link${isActive ? " is-active" : ""}`}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <span className="sample-badge">Sample fan data</span>
    </header>
  );
}

export default Header;
