import React, { useState } from "react";
import './Header.css';

//Icons
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
//pages


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alterna o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu ao clicar em um link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className='container'>
  
        <nav>
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}> 
                <li><a href='#home' onClick={closeMenu}> Home</a></li>
                <li>< a href='#about' onClick={closeMenu}>About</a></li>
                <li><a href='#port' onClick={closeMenu}>Skills</a></li>
                <li><a href='#pro' onClick={closeMenu}>Portifolio</a></li>
                <li><a href='#contact' onClick={closeMenu}>Contato</a></li>
            </ul>
        </nav>
      
       <div className="content">
       <h3>Olá, eu me chamo</h3>
        <h2>BRUNO PACHECO</h2>
        <p>Front-end Developer</p>
       
        <div className='icons'>
        <button> <a href="brunopachecogre@gmail.com"target='_blank'><i><MdOutlineAlternateEmail /></i></a></button>
        <button> <a href="https://github.com/Brunoake" target='_blank'><i><FaGithub /></i></a> </button>
        <button > <a href="https://www.linkedin.com/in/bruno-pacheco-44b601268/" target='_blank'><i><FaLinkedin /></i></a> </button> 
        </div>
       </div>
       <div className="perfil-container" id='home'>
        <img src="" alt="" />
       </div>
       </div>
       <div className="frutos-container">
        <h3>Frutos da Tecnologia</h3>
        <p>Transformando desafios técnicos em experiências digitais cativantes. Como desenvolvedor front-end especializado em HTML, CSS, JavaScript e ReactJS, cultivo soluções inovadoras que dão vida a interfaces modernas, intuitivas e impactantes, conectando pessoas e tecnologia de forma única.</p>
        <button>LEIA MAIS</button>
       </div>
       
    </div>
    
  )
}

export default Header