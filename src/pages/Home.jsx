import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" id="home">
        <div className="bg-decoration deco-top-left"></div>
        <div className="hero-content">
          <h1>Capacitando Você na Era Digital</h1>
          <p>
            Com o cenário digital em rápida evolução, proteger seus ativos nunca foi tão crítico. 
            Fornecemos soluções de segurança cibernética de ponta adaptadas às suas necessidades.
          </p>
          <button className="btn-primary">Comprar</button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
          alt="Segurança Digital Futurista" 
          className="hero-image" 
        />
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="bg-decoration deco-middle-right"></div>
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
          alt="Equipe de Segurança" 
          className="about-image" 
        />
        <div className="about-content">
          <span className="section-subtitle">SOBRE NÓS</span>
          <h2>Descubra Nossa Jornada Protegendo Seu Mundo Digital Com Experiência e Cuidado</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="btn-primary">Ler Mais</button>
        </div>
      </section>

      {/* Features 1 - Services Intro */}
      <section className="features-intro">
        <span className="section-subtitle">RECURSOS</span>
        <h2>Protegendo Seus Ativos Digitais Com Especialização</h2>
        <p className="section-description">
          Garanta sua tranquilidade com nossa proteção profissional. Nossos serviços são projetados para manter seus dados seguros hoje e no futuro.
        </p>
        
        <div className="cards-row">
          <div className="card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <rect x="10" y="8" width="4" height="6" rx="1"/>
              </svg>
            </div>
            <h3>Avaliação de Segurança Cibernética</h3>
            <p>Identificamos riscos e vulnerabilidades para fortalecer suas defesas.</p>
          </div>
          <div className="card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <h3>Detecção e Prevenção de Intrusão</h3>
            <p>Monitoramento contínuo para bloquear ameaças antes que elas causem danos.</p>
          </div>
          <div className="card">
            <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Resposta a Incidentes e Recuperação</h3>
            <p>Ação rápida para mitigar ataques e restaurar operações normais.</p>
          </div>
        </div>
      </section>

      {/* Key Service Features */}
      <section className="key-features" id="services">
        <div className="bg-decoration deco-bottom-left"></div>
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
          alt="Tecnologia de Proteção" 
          className="key-features-image" 
        />
        <div className="key-features-content">
          <span className="section-subtitle">POR QUE NÓS</span>
          <h2>Principais Recursos de Serviço Protegendo Você</h2>
          <p>Suporte 24 horas por dia, 7 dias por semana para todas as suas necessidades de segurança.</p>
          
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <line x1="6" y1="8" x2="18" y2="8"/>
                  <line x1="6" y1="12" x2="18" y2="12"/>
                </svg>
              </div>
              <h3>Soluções de Segurança Personalizadas</h3>
              <p>Adaptadas ao seu negócio.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                  <path d="M12 6v6l4 2"/>
                  <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                </svg>
              </div>
              <h3>Avaliação de Vulnerabilidade</h3>
              <p>Testes profundos e rigorosos.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Resposta a Incidentes 24/7</h3>
              <p>Sempre alerta para você.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>Programas de Treinamento</h3>
              <p>Eduque sua equipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <span className="section-subtitle">MISSÃO</span>
        <h2>Protegendo Seu Mundo Digital Juntos</h2>
        <p className="section-description">
          Estamos dedicados a criar um ambiente online mais seguro para todos.
        </p>
        
        <div className="cards-row">
          <div className="card dark-card">
            <h3>Declaração de Missão</h3>
            <p>Fornecer segurança de classe mundial para todos os nossos clientes.</p>
          </div>
          <div className="card dark-card">
            <h3>Objetivos Principais</h3>
            <p>Inovação constante e integridade em todas as ações.</p>
          </div>
          <div className="card dark-card">
            <h3>Abordagem Centrada no Cliente</h3>
            <p>Seu sucesso e segurança são nossa prioridade número um.</p>
          </div>
        </div>
        
        {/* Pagination dots simulation */}
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <span className="section-subtitle">PREÇOS</span>
        <h2>Comece a Usar o Blindagem 360</h2>
        <p className="section-description">Escolha o plano que melhor se adapta às suas necessidades.</p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>BÁSICO</h3>
            <p>Proteção essencial para iniciantes.</p>
            <div className="price">R$99 <span>/ mês</span></div>
            <ul className="features-list">
              <li>✓ Monitoramento Básico</li>
              <li>✓ Suporte por Email</li>
              <li>✓ Relatórios Mensais</li>
            </ul>
            <button className="btn-secondary">Comprar</button>
          </div>

          <div className="pricing-card highlighted">
            <div className="popular-tag">Mais Popular</div>
            <h3>PADRÃO</h3>
            <p>Segurança avançada para crescimento.</p>
            <div className="price">R$199 <span>/ mês</span></div>
            <ul className="features-list">
              <li>✓ Tudo do Básico</li>
              <li>✓ Monitoramento 24/7</li>
              <li>✓ Suporte Prioritário</li>
              <li>✓ Proteção contra Malware</li>
            </ul>
            <button className="btn-primary full-width">Comprar</button>
          </div>

          <div className="pricing-card">
            <h3>PREMIUM</h3>
            <p>Segurança completa para empresas.</p>
            <div className="price">R$399 <span>/ mês</span></div>
            <ul className="features-list">
              <li>✓ Tudo do Padrão</li>
              <li>✓ Consultoria Dedicada</li>
              <li>✓ IA Avançada</li>
            </ul>
            <button className="btn-secondary">Comprar</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <span className="section-subtitle">DEPOIMENTOS</span>
        <h2>Veja o que as Outras Pessoas Estão Dizendo</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Excelente serviço! A equipe é muito profissional e competente."</p>
            <div className="user-info">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Maria Garcia" className="avatar" />
              <div>
                <h4>Maria Garcia</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Sinto-me muito mais seguro com a Blindagem 360 cuidando dos meus dados."</p>
            <div className="user-info">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Roberto Alves" className="avatar" />
              <div>
                <h4>Roberto Alves</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"A resposta a incidentes foi incrivelmente rápida. Recomendo!"</p>
            <div className="user-info">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Ana Pereira" className="avatar" />
              <div>
                <h4>Ana Pereira</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"O melhor investimento que fizemos para a nossa empresa este ano."</p>
            <div className="user-info">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="Carlos Silva" className="avatar" />
              <div>
                <h4>Carlos Silva</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
