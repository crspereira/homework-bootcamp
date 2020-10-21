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
                  Layout construido com "puro" CSS, sem a biblioteca Bootstrap.
               </p>
               <p className="home-content-paragraphs">
                  Para a programação foram abordados conceitos como useState, useEffect, Axio, Routes, Loader e Componentização.
               </p>
               <p className="home-content-paragraphs">
                  Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:
               <a href="mailto:antforfigma@gmail.com"><span className="home-content-paragraphs-email"> antforfigma@gmail.com</span></a>
               </p>
            </div>
         </div>
         <div className="home-content-button-icon">
            <Link to="/search">
               <ButtonIcon textButton="Começar"/>
            </Link>
         </div>
      </div>
   );
}

export default Home;