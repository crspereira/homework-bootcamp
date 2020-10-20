import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
   return (
      <div className="home-container">
         <div>
            <div className="home-content-title">
               Desafio do Capítulo 3, Bootcamp DevSuperior
         </div>
            <div className="home-content-subtitle">
               <p className="home-content-paragraphs">
                  Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
               </p>
               <p className="home-content-paragraphs">
                  Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
               </p>
               <p className="home-content-paragraphs">
                  Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:
               <a href="mailto:antforfigma@gmail.com"><span className="home-content-paragraphs-email"> antforfigma@gmail.com</span></a>
               </p>
            </div>
         </div>
         <div className="home-content-button-icon">
            <Link to="/search">
               <ButtonIcon />
            </Link>
         </div>
      </div>
   );
}

export default Home;