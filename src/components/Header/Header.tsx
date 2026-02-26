import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    // 홈이면 바로 스크롤
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // 다른 라우트면 홈 + 해시로 이동
    navigate(`/#${sectionId}`);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          if (location.pathname === "/") {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          } else {
            navigate("/#home");
          }
        }}
        role="button"
        tabIndex={0}
      >
        최시원 포트폴리오
      </div>

      <nav className={styles.nav}>
        <button onClick={(e) => handleNavClick(e, "home")}>Home</button>
        <button onClick={(e) => handleNavClick(e, "skills")}>Skills</button>
        <button onClick={(e) => handleNavClick(e, "projects")}>Projects</button>
        <button onClick={(e) => handleNavClick(e, "others")}>Others</button>
      </nav>
    </header>
  );
};

export default Header;