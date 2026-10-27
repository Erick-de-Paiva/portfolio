import ProjetoCard from '@/components/Projeto/ProjetoCard';

const meusProjetos = [
  {
    title: 'Next.js Admin Template',
    category: 'Projeto de Curso',
    description: 'Um template de painel administrativo moderno, responsivo e altamente customizável para aplicações web, contando com arquitetura limpa e componentes reutilizáveis.',
    features: [
      'Autenticação Completa: Suporte a login tradicional (E-mail e Senha) e autenticação social via Google utilizando o Firebase.',
      'Alternância de Tema (Claro / Escuro): Sistema de troca de temas integrado que persiste a preferência do utilizador no localStorage.',
      'Totalmente Responsivo: Layout adaptável e otimizado para computadores, tablets e telemóveis.',
      'Gestão de Sessão & Cookies: Proteção de rotas e persistência de sessão integrada com cookies seguros.',
      'Estilização Moderna: Design limpo construído com o auxílio do Tailwind CSS.',
    ],
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Cookies & LocalStorage'],
    images: [
      '/img/projetos/template-admin-tela-autenticacao.png',
      '/img/projetos/template-admin-index-temaClaro.png',
      '/img/projetos/template-admin-index-temaEscuro.png',
    ],
    githubUrl: 'https://github.com/Erick-de-Paiva/projeto-template-admin',
  },
  {
    title: 'Projeto Next.js CRUD (Cadastro Simples)',
    category: 'Projeto de Curso',
    description:
      'Aplicação full-stack simplificada desenvolvida em Next.js para gerenciamento completo de clientes, com operações CRUD em tempo real e integração com banco de dados em nuvem.',
    features: [
      'Operações completas de Create, Read, Update e Delete (CRUD)',
      'Persistência de dados em tempo real utilizando Firebase Cloud Firestore',
      'Interface moderna e responsiva com Tailwind CSS e alternância de telas dinâmicas',
      'Tipagem estrita e segurança de dados desenvolvida com TypeScript',
    ],
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Cloud Firestore'],
    images: [
      '/img/projetos/next-crud-tela-inicial.png',
      '/img/projetos/next-crud-tela-cadastro.png',
      '/img/projetos/next-crud-alteracao-cadastro.png',
    ],
    githubUrl: 'https://github.com/Erick-de-Paiva/projeto-next-crud',
  },
];

export default function ProjetosPage() {
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
        Meus Projetos
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {meusProjetos.map((projeto, index) => (
          <ProjetoCard key={index} {...projeto} />
        ))}
      </div>
    </main>
  );
}
