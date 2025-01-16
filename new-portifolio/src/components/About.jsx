import React from 'react'
import './About.css';
import spacing from'./images/spacing.png'
// Icons
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

const About = () => {
  return (
    <div className='about-container' id='about'>
       <span> <h2>Sobre mim</h2></span>
        <p>Como profissional dedicado ao front-end, sou movido pela paixão em transformar ideias em interfaces <br/>funcionais e visualmente atraentes.</p>
        <button>EXPLORE</button>
        <div className='space'>
          <img src={spacing} alt="" />
         </div>

         <div  className='develop-container'>
         <span><i><HiMiniWrenchScrewdriver /></i> <h2>DEVELOPMENT</h2></span>
         <p>Especializado em desenvolver interfaces modernas e responsivas com HTML, CSS, JavaScript e ReactJS. Transformo ideias em soluções funcionais e intuitivas, sempre priorizando a experiência do usuário e a performance do projeto.</p>
         <div className='space'>
          <img src={spacing} alt="" />
         </div>
        </div>
    </div>
  )
}

export default About