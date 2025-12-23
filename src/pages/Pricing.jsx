import React from 'react';

function Pricing() {
  return (
    <div className="page-container">
      <section className="pricing-section">
        <span className="section-subtitle">PLANOS E PREÇOS</span>
        <h2>Investimento em Segurança</h2>
        <p className="section-description">Preços transparentes, sem taxas ocultas.</p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>BÁSICO</h3>
            <p>Para pequenas empresas.</p>
            <div className="price">R$99 <span>/ mês</span></div>
            <ul className="features-list">
              <li>✓ Monitoramento Básico</li>
              <li>✓ Suporte por Email</li>
              <li>✓ Relatórios Mensais</li>
              <li>✓ 5 Dispositivos</li>
            </ul>
            <button className="btn-secondary">Assinar Agora</button>
          </div>

          <div className="pricing-card highlighted">
            <div className="popular-tag">Recomendado</div>
            <h3>PADRÃO</h3>
            <p>Para empresas em crescimento.</p>
            <div className="price">R$199 <span>/ mês</span></div>
            <ul className="features-list">
              <li>✓ Tudo do Básico</li>
              <li>✓ Monitoramento 24/7</li>
              <li>✓ Suporte Prioritário</li>
              <li>✓ Proteção Malware Avançada</li>
              <li>✓ 20 Dispositivos</li>
            </ul>
            <button className="btn-primary full-width">Assinar Agora</button>
          </div>

          <div className="pricing-card">
            <h3>PREMIUM</h3>
            <p>Para grandes corporações.</p>
            <div className="price">R$399 <span>/ mês</span></div>
            <ul className="features-list">
              <li>✓ Tudo do Padrão</li>
              <li>✓ Consultoria Dedicada</li>
              <li>✓ IA Preditiva</li>
              <li>✓ Dispositivos Ilimitados</li>
              <li>✓ Treinamento Mensal</li>
            </ul>
            <button className="btn-secondary">Falar com Vendas</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
