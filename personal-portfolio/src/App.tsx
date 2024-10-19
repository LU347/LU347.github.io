import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
      <Footer />
      <Analytics />
    </>
  )
}

export default App
