import React from 'react'
import './Header.css';

//Icons
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className='container'>
      
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About-us</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portifolio</a></li>
                <li><a href="#">Contato</a></li>
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
       
    </div>
  )
}

export default Header