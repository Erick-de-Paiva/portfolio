import ProjetoCard from '@/components/Projeto/ProjetoCard';

const meusProjetos = [
  {
    title: 'Next.js Admin Template',
    category: 'Projeto de Curso',
    description: 'Um template de painel administrativo **moderno**, **responsivo** e altamente customizável para aplicações web, contando com **arquitetura limpa** e **componentes reutilizáveis**.',
    features: [
      '**Autenticação Completa:** Suporte a login tradicional (E-mail e Senha) e autenticação social via **Google** utilizando o **Firebase**.',
      '**Alternância de Tema (Claro / Escuro):** Sistema de troca de temas integrado que persiste a preferência do utilizador no **localStorage**.',
      '**Totalmente Responsivo:** Layout adaptável e otimizado para computadores, tablets e telemóveis.',
      '**Gestão de Sessão & Cookies:** Proteção de rotas e persistência de sessão integrada com **cookies seguros**.',
      '**Estilização Moderna:** Design limpo construído com o auxílio do **Tailwind CSS**.',
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
    title: 'Planej.ai - Educador Financeiro com IA',
    category: 'Bootcamp Santander 2026',
    description: 'Aplicação web inteligente de planejamento financeiro pessoal desenvolvida com **React**, **TypeScript**, **Tailwind CSS** e integrada à **API do Gemini (IA Generativa)**. O projeto transforma dados preenchidos pela pessoa usuária em um diagnóstico financeiro personalizado.',
    features: [
      '**Formulado Multi-etapas guiado:** Coleta de renda, custos fixos, dívidas e objetivos financeiros.',
      '**Diagnóstico com IA:** Análise estruturada gerada pelo **Google Gemini** com base nos dados do usuário.',
      '**Indicador de Viabilidade:** Classificação visual se a meta é viável, se precisa de ajustes ou se é inviável no prazo.',
      '**Chat Interativo com o Educador Financeiro:** O usuário pode fazer perguntas de acompanhamento e tirar dúvidas diretamente no card de insights, mantendo uma conversa consultiva com a IA.',
      '**Persistência Local (localStorage):** O histórico de simulações e as mensagens do chat são salvos localmente para que o usuário não perca sua conversa.',
      '**Tema Claro e Escuro:** Suporte completo a diferentes preferências visuais.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'Google Gemini API'],
    images: [
      '/img/projetos/bootcamp-santander-2026-diagnostico-chat.png',
      '/img/projetos/bootcamp-santander-2026-historico.png',
      '/img/projetos/bootcamp-santander-2026-tela-inicial.png',
    ],
    githubUrl: 'https://github.com/Erick-de-Paiva/Bootcamp-Santander-2026-AI-React-Front-end',
  },
  {
    title: 'Quiz Full-Stack Interativo',
    category: 'Projeto de Curso',
    description: 'Uma aplicação web de perguntas e respostas, desenvolvida com **arquitetura full-stack**, animações dinâmicas e design responsivo.',
    features: [
      '**Temporizador Dinâmico:** Círculo regressivo animado (**react-countdown-circle-timer**) com transição de cores conforme o tempo esgota.',
      '**Efeito de Revelação (Flip Cards):** Transição visual suave ao selecionar uma resposta para mostrar o resultado correto ou incorreto.',
      '**Rotas Dinâmicas de API:** Estrutura full-stack no **Next.js (Pages Router)** com endpoints dedicados para busca de questões e gestão do questionário.',
      '**Tela de Estatísticas:** Cálculo automático do total de perguntas, respostas certas e aproveitamento percentual ao finalizar o quiz.',
      '**Design Moderno e Responsivo:** Estilização limpa e focada na experiência do usuário.',
    ],
    technologies: ['Next.js (Pages Router)', 'React', 'TypeScript', 'Tailwind CSS', 'react-countdown-circle-timer'],
    images: [
      '/img/projetos/quiz-resultado-final.png',
      '/img/projetos/quiz-tela-padrao.png',
      '/img/projetos/quiz-tela-acerto.png',
      '/img/projetos/quiz-tela-erro.png',
    ],
    githubUrl: 'https://github.com/Erick-de-Paiva/projeto-quiz-fullstack',
  },
  {
    title: 'Projeto Next.js CRUD (Cadastro Simples)',
    category: 'Projeto de Curso',
    description:
      'Aplicação **full-stack** simplificada desenvolvida em **Next.js** para gerenciamento completo de clientes, com operações **CRUD** em tempo real e integração com banco de dados em **nuvem**.',
    features: [
      'Operações completas de **Create, Read, Update e Delete (CRUD)**',
      'Persistência de dados em tempo real utilizando **Firebase Cloud Firestore**',
      'Interface moderna e responsiva com **Tailwind CSS** e alternância de telas dinâmicas',
      'Tipagem estrita e segurança de dados desenvolvida com **TypeScript**',
    ],
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Cloud Firestore'],
    images: [
      '/img/projetos/next-crud-tela-inicial.png',
      '/img/projetos/next-crud-tela-cadastro.png',
      '/img/projetos/next-crud-alteracao-cadastro.png',
    ],
    githubUrl: 'https://github.com/Erick-de-Paiva/projeto-next-crud',
  },
  {
    title: 'Porta Premiada (Jogo do Monty Hall)',
    category: 'Projeto de Curso',
    description: 'Projeto desenvolvido com **Next.js** e **React**, aplicando conceitos modernos de desenvolvimento web, componentização, tipagem estática com **TypeScript** e estilização com **CSS Modules**.',
    features: [
      '**Configuração Dinâmica:** Tela inicial interativa que permite personalizar em tempo real a quantidade total de portas e definir qual delas esconde o prêmio.',
      '**Validação de Parâmetros:** Sistema de segurança na primeira página que valida as entradas do usuário, garantindo que a porta com o presente nunca seja superior ao número total de portas configuradas.',
      '**Lógica Interativa de Seleção:** Sistema completo de abertura de portas, gerenciamento de estados e controle de fluxo do jogo.',
      '**Estilização Modular:** Interface estilizada utilizando **CSS Modules** para garantir organização limpa e escopo isolado por componente.',
      '**Tipagem Estrita e Build Validado:** Código robusto e tipado com **TypeScript**, assegurando segurança de tipos e build de produção livre de erros.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'CSS Modules'],
    images: [
      '/img/projetos/porta-premiada-tela-inicio.png',
      '/img/projetos/porta-premiada-tela-jogo.png',
    ],
    githubUrl: 'https://github.com/Erick-de-Paiva/projeto-porta-premiada',
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
