import React from "react";
import "./News.css";
import Header from "../../Components/header/Header.jsx";
import Footer from "../../Components/footer/Footer.jsx";
import eventogt3 from "../../assets/nisangtr-gt3.jpg";

// Ejemplo de noticias
const noticias = [
  {
    id: 1,
    titulo: " 🏁¡GRAN EVENTO: CARRERA GT3 VIERNES 28! 🏁",
    descripcion: "¡No te pierdas nuestro evento especial con premios y sorpresas para todos los participantes! 5/10 vueltas por circuito Premio: $150,000 IC",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGxUmJl7Yobm6JIMUJs90yKDqMR9Qjrnd5w&s",
  },
  {
    id: 2,
    titulo: "🎖️🥊 ¡GRAN TORNEO DE BOXEO EN LEGADO RP! 🥊🎖️",
    descripcion: "¿Tienes lo que se necesita para dominar el ring? ¡Es hora de demostrar quién es el verdadero campeón del barrio!",
    imagen: "https://img.gta5-mods.com/q95/images/mlo-underground-box-ring-at-tequilala-sp-fivem/e22b4d-Image3.jpg",
  },
  {
    id: 3,
    titulo: " 🔥 ¡OPORTUNIDADES DE NEGOCIO EN LEGADO RP! 🔥 ",
    descripcion: "Ya están disponibles las nuevas adquisiciones comerciales en la ciudad. ¡No pierdas la oportunidad de invertir y hacer crecer tu imperio!",
    imagen: "https://i.blogs.es/40f729/bolsa-gta-5/840_560.jpeg",
  },
];

function News() {
  return (
    <>
      <Header />
      <div className="news-bg">
        <h1 className="news-title">Noticias y Eventos</h1>
        <div className="news-list">
          {noticias.map((noticia) => (
            <div className="news-card" key={noticia.id}>
              <div className="news-info">
                <h2 className="news-card-title">{noticia.titulo}</h2>
                <p className="news-card-desc">{noticia.descripcion}</p>
              </div>
              <div className="news-img-container">
                <img src={noticia.imagen} alt={noticia.titulo} className="news-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;