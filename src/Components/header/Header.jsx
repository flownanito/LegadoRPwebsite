import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/LegadoRPgrande.jpg";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="gaming-header">
      <div className="logo-container">
        <img src={Logo} alt="LegadoRP Logo" className="logo" />
        <h1 className="title">LegadoRP</h1>
      </div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </div>
      <nav className={`nav-buttons${menuOpen ? " open" : ""}`}>
        <a href="/Home" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="/News" onClick={() => setMenuOpen(false)}>Noticias</a>
        <a href="/shop" onClick={() => setMenuOpen(false)}>Tienda</a>
        <a href="https://discord.gg/VT3rvWcJ" onClick={() => setMenuOpen(false)}>Discord</a>
      </nav>
    </header>
  );
}

export default Header;