import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Blindagem 360</div>
      <div className="nav-links">
        <Link to="/" className="active">Início</Link>
        <Link to="/sobre" target="_blank">Sobre</Link>
        <Link to="/servicos" target="_blank">Serviços</Link>
        <Link to="/precos" target="_blank">Preços</Link>
        <Link to="/blog" target="_blank">Blog</Link>
      </div>
      <Link to="/precos" target="_blank"><button className="btn-primary">Comprar</button></Link>
    </nav>
  );
}

export default Navbar;
