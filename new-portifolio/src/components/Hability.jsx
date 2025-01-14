import React from 'react';
import './Hability.css';

//images
import css from './images/css.png';
import html from './images/html.png';
import git from './images/git.png';
import js from './images/js.png';
import react from './images/react.png';
import bootstrap from './images/bootstrap.png';
import mongo from './images/mongo.png';
import node from './images/node.png';

const Hability = () => {
  return (
    <div>
        <div className='habilty-container'>
            <span><h2>Habilidades</h2></span>
            <h3>USANDO AGORA:</h3>
            <div className="use-container">
            <ul>
            <li>
            <img src={html} alt="" />
            <p>HTML5</p> 
            </li>
            <li>
            <img src={css} alt="" />
            <p>CSS3</p> 
            </li>
            <li>
            <img src={js} alt="" />
            <p>JAVASCRIPT</p> 
            </li>
            <li>
            <img src={react} alt="" />
            <p>REACT</p> 
            </li>
            <li>
            <img src={bootstrap} alt="" />
            <p>BOOTSTRAP</p> 
            </li>
            <li>
            <img src={git} alt="" />
            <p>GIT</p> 
            </li>
            </ul>
            </div>
            <div className="aprend-container">
                <h3>APRENDIZADO:</h3>
                <ul>
                    <li>
                        <img src={node} alt="" />
                        <p>NODEJS</p>
                    </li>
                    <li id='mongo'>
                        <img src={mongo} alt="" />
                        <p>MONGODB</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hability