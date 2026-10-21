import Image from "next/image";
import styles from "./page.module.css";

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
        <h2>Desenvolvedor</h2>

        <div className={styles.socialCards}>
          <a
            href="https://www.linkedin.com/in/erick-paiva-1b190437a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Erick-de-Paiva"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.contato}>
            <h2>Contatos</h2>
            <p>
              <i className="fa-solid fa-envelope"></i>
              <strong>Email:</strong> paiva.erick2001@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>
              <strong>Celular:</strong> +55 (21) 96958-7080
            </p>
          </div>

          <div className={styles.sobreMim}>
            <h2>Sobre mim</h2>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas, com foco e dedicação contínua aos estudos em programação.
            </p>
            <p>
              Tenho grande interesse por tecnologia, busco sempre desenvolver minha lógica de programação e estruturar soluções de forma organizada e eficiente.
            </p>
            <p>
              Também me preocupo com a construção de interfaces bem estruturadas e visualmente agradáveis, trazendo funcionalidade e excelente experiência do usuário.
            </p>
            <p>
              Estou em constante evolução e motivado a crescer profissionalmente na área de tecnologia.
            </p>
          </div>

          <div className={styles.tecnologias}>
            <h2>Tecnologias</h2>
            <div className={styles.techCards}>
              <div className={styles.techCard}>HTML</div>
              <div className={styles.techCard}>CSS</div>
              <div className={styles.techCard}>JavaScript</div>
              <div className={styles.techCard}>TypeScript</div>
              <div className={styles.techCard}>React</div>
              <div className={styles.techCard}>Next.js</div>
              <div className={styles.techCard}>Python</div>
              <div className={styles.techCard}>Git</div>
              <div className={styles.techCard}>GitHub</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
