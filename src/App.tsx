import styles from './App.module.css'
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App