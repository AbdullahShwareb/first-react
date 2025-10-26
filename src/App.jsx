import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';



function App(){


  return <> <Navbar /> 
   <Hero />
   <Portfolio />
    <About />
  <Footer /> 
  </>

  
}
export default App;