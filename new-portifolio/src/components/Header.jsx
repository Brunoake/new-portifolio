import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <h2>Bem vindo ao meu Portifolio</h2>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About-us</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portifolio</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header