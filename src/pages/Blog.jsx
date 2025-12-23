import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "As 5 Maiores Ameaças Cibernéticas de 2024",
      excerpt: "Descubra o que esperar do cenário de ameaças este ano e como se proteger.",
      date: "22 Dez 2024",
      author: "Ana Pereira",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Como Implementar Zero Trust na Sua Empresa",
      excerpt: "Um guia prático para adotar a arquitetura de segurança Zero Trust.",
      date: "15 Dez 2024",
      author: "Carlos Silva",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "A Importância da Autenticação em Dois Fatores",
      excerpt: "Por que senhas não são mais suficientes e como a 2FA salva o dia.",
      date: "10 Dez 2024",
      author: "Roberto Alves",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="page-container">
      <section className="mission-section"> {/* Reusing section class for padding */}
        <span className="section-subtitle">BLOG</span>
        <h2>Últimas Notícias e Artigos</h2>
        <p className="section-description">
          Fique por dentro das últimas tendências em segurança da informação.
        </p>
        
        <div className="cards-row" style={{ marginTop: '40px' }}>
          {posts.map(post => (
            <div className="card" key={post.id} style={{ textAlign: 'left' }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} 
              />
              <span style={{ fontSize: '0.9rem', color: 'var(--primary-color)' }}>{post.date} • {post.author}</span>
              <h3 style={{ marginTop: '8px', marginBottom: '8px' }}>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="btn-primary" style={{ marginTop: '16px', padding: '8px 16px', fontSize: '0.9rem' }}>Ler Artigo</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
