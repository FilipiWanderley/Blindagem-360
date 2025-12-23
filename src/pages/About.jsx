import React from 'react';

function About() {
  return (
    <div className="page-container">
      <section className="about-section">
        <div className="bg-decoration deco-middle-right"></div>
        <img 
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
          alt="Equipe de Segurança" 
          className="about-image" 
        />
        <div className="about-content">
          <span className="section-subtitle">SOBRE NÓS</span>
          <h2>Descubra Nossa Jornada Protegendo Seu Mundo Digital Com Experiência e Cuidado</h2>
          <p>
            Na Blindagem 360, acreditamos que a segurança digital é um direito, não um privilégio. 
            Nossa jornada começou com a missão de tornar a proteção cibernética acessível e robusta para todos.
          </p>
          <p>
            Com uma equipe de especialistas dedicados, trabalhamos incansavelmente para antecipar ameaças e desenvolver soluções proativas.
            Nossos valores são baseados na transparência, integridade e inovação constante.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <span className="section-subtitle">NOSSA EQUIPE</span>
        <h2>Quem Faz Acontecer</h2>
        <p className="section-description">
          Conheça os especialistas por trás da sua segurança.
        </p>
        
        <div className="cards-row">
          <div className="card dark-card">
            <h3>Carlos Silva</h3>
            <p>CEO & Fundador</p>
            <p>Especialista em segurança com mais de 15 anos de experiência.</p>
          </div>
          <div className="card dark-card">
            <h3>Ana Pereira</h3>
            <p>Diretora de Tecnologia</p>
            <p>Líder em inovação e desenvolvimento de soluções de defesa.</p>
          </div>
          <div className="card dark-card">
            <h3>Roberto Alves</h3>
            <p>Chefe de Operações</p>
            <p>Garantindo que nossos serviços sejam entregues com excelência.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
