import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import serverImg from "../../assets/LegadoRPgrande.jpg";

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`slider-img${idx === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${img.src})` }}
          aria-label={img.alt}
        >
          <span className="slider-caption">{img.alt}</span>
        </div>
      ))}
      <div className="slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? "dot active" : "dot"}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ...existing code...

function Home() {
  return (
    <div className="home-bg">
      <Header />

      {/* Hero Section */}
      <section className="hero-section animate-fade-in">
        <img src={serverImg} alt="Servidor LegadoRP" className="hero-img" />
        <h2 className="hero-title">¡Bienvenido a LegadoRP!</h2>
        <p className="hero-desc">
          Vive la mejor experiencia de rol en nuestro servidor. Comunidad activa, eventos y mucho más.
        </p>
      </section>

      {/* Sobre Nosotros */}
 <div class="about-section about-flex">
  <div class="about-card">
    <h2>Cómo nació la idea</h2>
    <p>Texto de la idea...</p>
  </div>
  <div class="about-card">
    <h2>Quiénes somos</h2>
    <p>Texto de quienes somos...</p>
  </div>
</div>

      {/* Slider de Imágenes */}
      <section className="slider-section animate-slide-up" id="galeria">
        <h2>Galería del Servidor</h2>
        <ImageSlider
          images={[
            { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", alt: "Evento 1" },
            { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", alt: "Evento 2" },
            { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", alt: "Evento 3" },
            { src: serverImg, alt: "Servidor LegadoRP" }
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}

export default Home;