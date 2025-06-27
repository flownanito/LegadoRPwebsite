import "./Footer.css";
import logotiktok from "../../assets/logotiktok.png";
import logoyoutube from "../../assets/logoyoutube.png";
import logoinstagram from "../../assets/logoinsta.webp";

function Footer() {
  return (
    <footer className="gaming-footer">
      <div className="footer-content">
        <h2 className="footer-title">LegadoRP</h2>
        <div className="card">
          <ul>
            <li className="iso-pro discord">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.tiktok.com/@_legado_rp" target="_blank" rel="noopener noreferrer">
                  <img src={logotiktok} alt="Logo" className="icon-img"/>

              </a>
              <div className="text">Tik Tok</div>
            </li>

            <li className="iso-pro youtube">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={logoyoutube} alt="Logo" className="icon-img"/>
              </a>
              <div className="text">YouTube</div>
            </li>

            <li className="iso-pro instagram">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.instagram.com/_legado_rp/" target="_blank" rel="noopener noreferrer">
                <img src={logoinstagram} alt="Logo" className="icon-img"/>
              </a>
              <div className="text">Instagram</div>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <a href="#privacidad">Política de Privacidad</a>
          <a href="#cookies">Política de Cookies</a>
          <a href="#terminos">Términos y Condiciones</a>
        </div>
        <p className="copy">&copy; 2025 LegadoRP. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;