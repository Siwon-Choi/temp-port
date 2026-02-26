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

      {/* Bottom */}
      <div className={styles.bottom}>
        {/* 좌: 사진 영역 (424) */}
        <div className={styles.bottomLeft}>
          <div className={styles.avatar}>
            {/* 실제 사진 넣을 때: img src만 바꾸면 됨 */}
            <img
              className={styles.avatarImg}
              src="/profile.jpg"
              alt="profile"
            />
          </div>
        </div>

        {/* 우: 프로필 정보 영역 (1016) */}
        <div className={styles.bottomRight}>
          {/* 1) 상단: 이름 + 링크 3개 */}
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

          {/* 2) 하단: 2줄(행) 정보, 각 행은 좌/우 2칸 */}
          <div className={styles.profileInfo}>
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>📞 010-1234-1234</div>
              <div className={styles.infoItem}>📅 1999.12.31</div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>✉️ xxxxx@gmail.com</div>
              <div className={styles.infoItem}>🏫 ○○대학교 xxxx과</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;