import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoIcon}>&lt;/&gt;</span> Portfólio
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Início</Link>
        <Link href="/projetos" className={styles.navLink}>Projetos</Link>
        <Link href="/certificados" className={styles.navLink}>Certificados</Link>
      </nav>
    </header>
  );
}
