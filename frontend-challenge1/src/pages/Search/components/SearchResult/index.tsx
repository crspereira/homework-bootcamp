import React from 'react';
import LogoGit from 'core/assets/logoGit-gray.png';
import './styles.css';
import ButtonIcon from 'core/components/ButtonIcon';


const SearchResult = () => {
   return (
      <div className="search-result-container">
         <div className="search-result-content-col-1">
            <img src={LogoGit} alt="logoGit" className="search-result-content-img" />
            <span>
               <ButtonIcon textButton="Ver perfil" />
            </span>
         </div>
         <div className="search-result-content-col-2">
            <div className="search-result-content-info-1">
               <div className="content-info-1-field">
                  Repositórios públicos: 62
               </div>
               <div className="content-info-1-field">
                  Seguidores: 127
               </div>
               <div className="content-info-1-field">
                  Seguindo: 416
               </div>
            </div>
            <div className="search-result-content-info-2">
               <div className="content-info-2-title">
                  Informações
               </div>
               <div className="content-info-2-field">
                  <span className="content-info-2-field-title">
                     Empresa:
                  </span>
               </div>
               <div className="content-info-2-field">
                  <span className="content-info-2-field-title">
                     Website/Blog:
                  </span>
               </div>
               <div className="content-info-2-field">
                  <span className="content-info-2-field-title">
                     Localidade:
                  </span>
               </div>
               <div className="content-info-2-field">
                  <span className="content-info-2-field-title">
                     Membro desde:
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SearchResult;