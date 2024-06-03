import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header>
        <h1>Bem-vindo(a) à Sua Página!</h1>
      </header>

      <main>
        <section className="hero">
          <h2>Descubra um Mundo de Possibilidades</h2>
          <p>Explore, aprenda e conecte-se com pessoas incríveis.</p>
        </section>

        <section className="cta">
          <button className="login-btn">Login</button>
          <button className="register-btn">Registrar</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Sua Página Incrível</p>
      </footer>
    </div>
  );
}

export default HomePage;