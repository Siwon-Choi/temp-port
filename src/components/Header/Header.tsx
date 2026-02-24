import styles from './Header.module.css'

const Header = () => {

  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => go("about")}>
        최시원 포트폴리오
      </div>

      <nav className={styles.nav}>
        <button onClick={() => go("about")}>About</button>
        <button onClick={() => go("skills")}>Skills</button>
        <button onClick={() => go("projects")}>Projects</button>
      </nav>
    </header>
  )
}

export default Header