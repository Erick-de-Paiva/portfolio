import Image from "next/image";
import styles from "./page.module.css";
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFileDownload,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <Image
          src="/img/fotoPerfil.jpg"
          alt="Foto de Erick de Paiva Alberto"
          width={180}
          height={180}
          className={styles.fotoPerfil}
          priority
        />
        <h1>Erick de Paiva Alberto</h1>
        <h2>Desenvolvedor Full-Stack</h2>

        <div className={styles.socialCards}>
          <a
            href="https://www.linkedin.com/in/erick-paiva-1b190437a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Erick-de-Paiva"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={`${styles.infoCard} ${styles.contato}`}>
            <h2>Contatos</h2>
            <p>
              <FaEnvelope className={styles.contactIcon} />
              <strong>Email:</strong>{" "}
              <a href="mailto:paiva.erick2001@gmail.com" className={styles.contactLink}>
                paiva.erick2001@gmail.com
              </a>
            </p>
            <p>
              <p>
                <FaPhoneAlt className={styles.contactIcon} />
                <strong>Celular:</strong> +55 (21) 96958-7080
              </p>
            </p>

            <a 
              href="/Currículo-Erick-de-Paiva-Desenvolvedor.pdf" 
              download="Currículo-Erick-de-Paiva-Desenvolvedor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvButton}
            >
              <FaFileDownload size={18} />
              <span>Baixar Currículo</span>
            </a>
          </div>

          <div className={`${styles.infoCard} ${styles.sobreMimCard} ${styles.sobreMim}`}>
            <h2>Sobre mim</h2>
            <p>
              Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>, com foco e dedicação aos estudos em programação / desenvolvimento <strong>Full-Stack</strong>.
            </p>
            <p>
              Busco sempre evoluir minha <strong>lógica de programação</strong> para construir interfaces bonitas e intuitivas, sempre mantendo o <strong>código limpo</strong> e bem organizado.
            </p>
            <p>
              Estou em constante evolução e motivado a crescer profissionalmente na área de tecnologia.
            </p>
          </div>

          <div className={`${styles.infoCard} ${styles.tecnologias}`}>
            <h2>Tecnologias</h2>
            <div className={styles.techCards}>
              <div className={`${styles.techCard} ${styles.html}`}><FaHtml5 size={16} /> HTML</div>
              <div className={`${styles.techCard} ${styles.css}`}><FaCss3Alt size={16} /> CSS</div>
              <div className={`${styles.techCard} ${styles.js}`}><FaJs size={16} /> JavaScript</div>
              <div className={`${styles.techCard} ${styles.ts}`}><SiTypescript size={15} /> TypeScript</div>
              <div className={`${styles.techCard} ${styles.react}`}><FaReact size={16} /> React</div>
              <div className={`${styles.techCard} ${styles.next}`}><SiNextdotjs size={15} /> Next.js</div>
              <div className={`${styles.techCard} ${styles.python}`}><FaPython size={16} /> Python</div>
              <div className={`${styles.techCard} ${styles.git}`}><FaGitAlt size={16} /> Git</div>
              <div className={`${styles.techCard} ${styles.github}`}><FaGithub size={16} /> GitHub</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
