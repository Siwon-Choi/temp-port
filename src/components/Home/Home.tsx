import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* 배경 이미지 */}
      <div className={styles.bg} />

      {/* (선택) 어두운 오버레이: 글자 잘 보이게 */}
      <div className={styles.overlay} />

      {/* 텍스트(이미지 위) */}
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
 
        <div className = "buttom">
            <div className = "Image">
            </div>
            <div className = "profile">
                
        </div>
        </div>
        </section>
    );
};

export default Home;