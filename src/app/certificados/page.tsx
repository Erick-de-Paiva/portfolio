import CertificadoCard from '@/components/Certificado/CertificadoCard';

const meusCertificados = [
  {
    title: 'Next.js e React - Curso Completo',
    issuer: 'Udemy (Cod3r Cursos)',
    date: '2026',
    hours: '28.5h',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    credentialUrl: 'https://ude.my/UC-4da21840-c8cf-45ca-9c37-5809233b9da5',
    imageUrl: '/img/certificado-react-nextjs-udemy.jpg',
  },
];

export default function CertificadosPage() {
  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '680px', margin: '0 auto' }}>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: '700',
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(to right, #a78bfa, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))',
        }}
      >
        Meus Certificados
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {meusCertificados.map((cert, index) => (
          <CertificadoCard key={index} {...cert} />
        ))}
      </div>
    </main>
  );
}
