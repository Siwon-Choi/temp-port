import styles from './App.module.css'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Others from './components/Others/Others'

function App() {

  // url 값 및 변경 추적
  const location = useLocation();

  // #hash 이동
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location]);

  // 구성
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section id="home" className={styles.homeSection}><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="others"><Others /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App