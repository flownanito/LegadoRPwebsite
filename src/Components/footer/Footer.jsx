import "./Footer.css";

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
              <a href="https://discord.gg/VT3rvWcJ" target="_blank" rel="noopener noreferrer">
                  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <defs>
                      <linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#25F4EE"/>
                        <stop offset="50%" stop-color="#FF0055"/>
                        <stop offset="100%" stop-color="#FF4B2B"/> 
                      </linearGradient>
                    </defs>
                    <path fill="url(#tiktokGradient)" d="M448,209.9v94.5c-36.5,0-71.2-11.8-99-31.7v116.4c0,67.3-54.7,122-122,122s-122-54.7-122-122,54.7-122,122-122c6.9,0,13.6,0.6,20.1,1.8v94.9c-6.3-2-13-3-20.1-3-38.2,0-69.2,31-69.2,69.2s31,69.2,69.2,69.2,69.2-31,69.2-69.2V0h94.8c0,63.8,51.7,115.5,115.5,115.5z"/>
                  </svg>

              </a>
              <div className="text">Tik Tok</div>
            </li>

            <li className="iso-pro youtube">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.773-42.25-48.432-48.532C456.799 
                  64 288 64 288 64s-168.799 0-213.223 11.551c-23.66 6.282-42.15 24.882-48.432 
                  48.532C16.794 168.508 16.794 256 16.794 256s0 87.492 9.551 
                  131.917c6.282 23.65 24.773 42.25 48.432 48.531C119.201 448 288 448 
                  288 448s168.799 0 213.223-11.552c23.659-6.281 42.15-24.881 
                  48.432-48.531C559.206 343.492 559.206 256 559.206 
                  256s0-87.492-9.551-131.917zM232 336V176l142.857 80L232 336z"/>
                </svg>
              </a>
              <div className="text">YouTube</div>
            </li>

            <li className="iso-pro instagram">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <defs>
                    <linearGradient id="insta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c13584" />
                      <stop offset="100%" stopColor="#d6a606" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#insta-gradient)"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
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