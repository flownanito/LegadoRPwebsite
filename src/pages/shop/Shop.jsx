import React, { useState } from 'react';
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import './Shop.css';

const products = [
  {
    id: 1,
    name: "Camiseta Legado",
    price: "15€",
    image: "https://via.placeholder.com/200x200?text=Camiseta"
  },
  {
    id: 2,
    name: "Gorra Salitre",
    price: "10€",
    image: "https://via.placeholder.com/200x200?text=Gorra"
  },  
  {
    id: 3,
    name: "Taza RP",
    price: "8€",
    image: "https://via.placeholder.com/200x200?text=Taza"
  }
];

function Shop() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      <div className="shop-container">
        {/* Carrusel de fotos */}
        <div className="carousel">
          <img src="https://media-tge.ams3.cdn.digitaloceanspaces.com/media/3994625ce80cd4c6.jpg" alt="Anuncio 1" className="carousel-image" />
          <img src="https://pbs.twimg.com/media/DYWgvpjVwAABzO5.jpg" alt="Anuncio 2" className="carousel-image" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJRQmElG6oQYiiVWqM_LAUNfMMQIgVatWEA&s" alt="Anuncio 3" className="carousel-image" />
        </div>

        {/* Zona de anuncios */}
        <div className="announcement">
          <h2>¡Grandes ofertas esta semana!</h2>
          <p>Descuentos de hasta el 50% en productos seleccionados. ¡No te lo pierdas!</p>
        </div>

        {/* Título de la tienda */}
        <h1 className="shop-title">TIENDA DE LEGADORP</h1>

        {/* Campo de búsqueda */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Grid de productos */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">{product.price}</p>
                <button className="buy-button">Comprar</button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>No se encontraron productos</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;