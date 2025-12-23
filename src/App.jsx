import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Blindagem 360</div>
        <div className="nav-links">
          <a href="#home" className="active">Início</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </div>
        <button className="btn-primary">Comprar</button>
      </nav>

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
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
          alt="Segurança Digital Futurista" 
          className="hero-image" 
        />
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
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
            <div className="icon-circle">🔒</div>
            <h3>Avaliação de Segurança Cibernética</h3>
            <p>Identificamos riscos e vulnerabilidades para fortalecer suas defesas.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🛡️</div>
            <h3>Detecção e Prevenção de Intrusão</h3>
            <p>Monitoramento contínuo para bloquear ameaças antes que elas causem danos.</p>
          </div>
          <div className="card">
            <div className="icon-circle">🔄</div>
            <h3>Resposta a Incidentes e Recuperação</h3>
            <p>Ação rápida para mitigar ataques e restaurar operações normais.</p>
          </div>
        </div>
      </section>

      {/* Key Service Features */}
      <section className="key-features" id="services">
        <div className="bg-decoration deco-bottom-left"></div>
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
          alt="Tecnologia de Proteção" 
          className="key-features-image" 
        />
        <div className="key-features-content">
          <span className="section-subtitle">POR QUE NÓS</span>
          <h2>Principais Recursos de Serviço Protegendo Você</h2>
          <p>Suporte 24 horas por dia, 7 dias por semana para todas as suas necessidades de segurança.</p>
          
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">🏢</div>
              <h3>Soluções de Segurança Personalizadas</h3>
              <p>Adaptadas ao seu negócio.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h3>Avaliação de Vulnerabilidade</h3>
              <p>Testes profundos e rigorosos.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏱️</div>
              <h3>Resposta a Incidentes 24/7</h3>
              <p>Sempre alerta para você.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
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

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="bg-decoration deco-footer-right"></div>
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Blindagem 360</h3>
            <p>Protegendo seu futuro digital com excelência e inovação.</p>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <a href="#about">Sobre Nós</a>
            <a href="#services">Serviços</a>
            <a href="#pricing">Preços</a>
            <a href="#blog">Blog</a>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>📧 contato@blindagem360.com</p>
            <p>📞 +55 11 99999-9999</p>
            <p>📍 São Paulo, Brasil</p>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Seu email" />
              <button className="btn-primary">Assinar</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
