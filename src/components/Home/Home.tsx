import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.bg} />
        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={styles.title}>
            <div>백엔드, 임베디드 개발자,</div>
            <div>최시원입니다.</div>
          </div>
          <div className={styles.subtitle}>
            미래 기술과 사용자 경험의 경계를 넓히는<br />
            백엔드 개발자입니다.
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <div className={styles.avatar}>
            <img
              className={styles.avatarImg}
              src="/profile.jpeg"
              alt="profile"
            />
          </div>
        </div>

        <div className={styles.bottomRight}>
          <div className={styles.profileHeader}>
            <h3 className={styles.name}>홍길동</h3>

            <div className={styles.links}>
              <a className={styles.linkBtn} href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={styles.linkBtn} href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className={styles.linkBtn} href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>010-1234-1234</div>
              <div className={styles.infoItem}>1999.12.31</div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>xxxxx@gmail.com</div>
              <div className={styles.infoItem}>○○대학교 xxxx과</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;