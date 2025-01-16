import React from 'react'
import './Header.css';

//Icons
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
//pages


const Header = () => {
  return (
    <div>
      <div className='container'>
  
        <nav>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li>< a href='#about'>About-us</a></li>
                <li><a href='#port'>Skills</a></li>
                <li><a href='#pro'>Portifolio</a></li>
                <li><a href='#contact'>Contato</a></li>
            </ul>
        </nav>
      
       <div className="content">
       <h3>Olá, eu me chamo</h3>
        <h2>BRUNO PACHECO</h2>
        <p>Front-end Developer</p>
       
        <div className='icons'>
        <button><i><MdOutlineAlternateEmail /></i></button>
        <button ><i><FaGithub /></i></button>
        <button ><i><FaLinkedin /></i></button> 
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