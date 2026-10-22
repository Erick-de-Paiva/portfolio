import CertificadoCard from '@/components/Certificado/CertificadoCard';

const meusCertificados = [
  {
    title: 'Next.js e React - Curso Completo',
    issuer: 'Udemy (Cod3r Cursos)',
    date: 'Out 2026',
    hours: '28.5h',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    credentialUrl: 'https://ude.my/UC-4da21840-c8cf-45ca-9c37-5809233b9da5',
    imageUrl: '/img/certificado-react-nextjs-udemy.jpg',
  },
  {
    title: 'Santander 2026 - AI React Front-end',
    issuer: 'DIO (Digital Innovation One)',
    date: 'Jul 2026',
    hours: '42h',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'localStorage'],
    credentialUrl: 'https://www.dio.me/certificate/GT9JE7ZQ',
    imageUrl: '/img/certificado-bootcamp-santander-dio.png',
  },
  {
    title: 'Python',
    issuer: 'Santander Open Academy',
    date: 'Abr 2026',
    hours: '8h',
    technologies: ['Python', 'Lógica de Programação', 'POO'],
    credentialUrl: '',
    imageUrl: '/img/certificado-santander-python.jpg',
  },
  {
    title: 'Algoritmos e Lógica de Programação',
    issuer: 'Udemy (Nelio Alves)',
    date: 'Ago 2025',
    hours: '30.5h',
    technologies: ['Lógica de Programação', 'Algoritmos', 'C', 'C++', 'Java', 'C#', 'Python'],
    credentialUrl: 'https://ude.my/UC-a7f53a57-a6c7-4600-a386-d94d23ea37b8',
    imageUrl: '/img/certificado-algoritmos-e-logica-udemy.png',
  },
  {
    title: 'JavaScript',
    issuer: 'Curso em Vídeo',
    date: 'Ago 2025',
    hours: '40h',
    technologies: ['JavaScript', 'DOM', 'HTML5', 'CSS3', 'ES6+'],
    credentialUrl: 'https://www.cursoemvideo.com/validacao-de-certificado/',
    imageUrl: '/img/certificado-curso-em-video-javascript.png',
  },
  {
    title: 'Discover',
    issuer: 'Faculdade de Tecnologia Rocketseat',
    date: 'Mar 2025',
    hours: '12h',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'Programação Web'],
    credentialUrl: 'https://app.rocketseat.com.br/certificates/2647c962-ee16-4ec1-8de1-67d86ed28b93',
    imageUrl: '/img/certificado-rocketseat-discover.png',
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
