
import './App.css'
import Header from './components/Header'
import About from './components/About';
import Hability from './components/Hability';
import Portifolio from './components/Portifolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app'>
     <Header/>
     <About/>
     <Hability/>
     <Portifolio/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
