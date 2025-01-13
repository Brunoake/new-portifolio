import React from 'react'
import './About.css';
import spacing from'./images/spacing.png'

const About = () => {
  return (
    <div className='about-container'>
       <span> <h2>Sobre mim</h2></span>
        <p>Como profissional dedicado ao front-end, sou movido pela paixão em transformar ideias em interfaces <br/>funcionais e visualmente atraentes.</p>
        <button>EXPLORE</button>
        <div className='space'>
          <img src={spacing} alt="" />
        </div>
    </div>
  )
}

export default About