import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

import './index.css';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
