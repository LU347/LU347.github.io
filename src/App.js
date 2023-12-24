import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

//TODO: Change to router
function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/projects":
      component = <Projects />
      break
    case "/about":
      component = <About />
      break
    default:
      component = <Home />
      break
  }
  return (
   <>
    <Navbar />
    {component}
   </>
  );
}

export default App;
