import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/projects":
      component = <Projects />
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
