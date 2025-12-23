import React from 'react';

function Services() {
  return (
    <div className="page-container">
      <section className="features-intro">
        <span className="section-subtitle">NOSSOS SERVIÇOS</span>
        <h2>Proteção Completa para Sua Empresa</h2>
        <p className="section-description">
          Oferecemos uma gama completa de serviços de segurança cibernética para atender a todas as suas necessidades.
        </p>
        
        <div className="cards-row">
          <div className="card">
            <div className="icon-circle">🔒</div>
            <h3>Avaliação de Segurança</h3>
            <p>Análise detalhada da sua infraestrutura para identificar pontos fracos.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🛡️</div>
            <h3>Monitoramento 24/7</h3>
            <p>Vigilância constante para garantir que suas operações nunca parem.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🔄</div>
            <h3>Recuperação de Desastres</h3>
            <p>Planos de contingência robustos para recuperação rápida de dados.</p>
          </div>
          <div className="card">
            <div className="icon-circle">☁️</div>
            <h3>Segurança em Nuvem</h3>
            <p>Proteção especializada para seus ativos armazenados na nuvem.</p>
          </div>
          <div className="card">
            <div className="icon-circle">📱</div>
            <h3>Segurança Mobile</h3>
            <p>Proteja os dispositivos móveis da sua equipe contra ameaças.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🎓</div>
            <h3>Treinamento de Equipe</h3>
            <p>Educação em segurança cibernética para seus funcionários.</p>
          </div>
        </div>
      </section>

      <section className="key-features">
        <div className="bg-decoration deco-bottom-left"></div>
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
          alt="Tecnologia de Proteção" 
          className="key-features-image" 
        />
        <div className="key-features-content">
          <span className="section-subtitle">DIFERENCIAIS</span>
          <h2>Por Que Escolher Nossos Serviços?</h2>
          <p>Combinamos tecnologia de ponta com expertise humana.</p>
          
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h3>Implementação Rápida</h3>
              <p>Comece a ser protegido em questão de horas.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Suporte Dedicado</h3>
              <p>Gerentes de conta exclusivos para o seu negócio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
