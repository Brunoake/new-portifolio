import React from 'react'
import './Header.css';
import fundoHeader from "./images/fundoheader.png"

const Header = () => {
  return (
    <div className='container'>
      <img src={fundoHeader} alt="" id='fundo'/>
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