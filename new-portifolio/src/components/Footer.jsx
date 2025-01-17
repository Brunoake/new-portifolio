import React from 'react'

import './Footer.css';

//icons
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <i><MdKeyboardDoubleArrowUp /></i>
            <h3><a href="#home">VOLTE PARA O TOPO</a></h3>
            <div className="socials">
               <a href="https://www.linkedin.com/in/bruno-pacheco-44b601268/" target='_blank'><i><CiLinkedin /></i></a>
                <a href="https://github.com/Brunoake" target='_blank'><i><FaGithub/></i></a>
                <a href="brunopachecogre@gmail.com" target='_blank'><i><MdOutlineMail/></i></a>
                <p>@2025 Bruno Pacheco <em> All Rights Reserved.</em></p>
            </div>
        </div>
    </div>
  )
}

export default Footer