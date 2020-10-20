import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import './styles.css';

const SearchArea = () => {
   return (
      <div className="search-area-container">
         <h1 className="search-area-title">
            Encontre um perfil Github
         </h1>
         <form action="">
            <div className="form-container">
               <input 
                  type="text" 
                  className="search-area-input-text"
                  required
               />
               <div className="form-content-button">
                  <span >
                        <ButtonIcon textButton="Encontrar" />
                  </span>
               </div>
            </div>
         </form>
      </div>
   );
}

export default SearchArea;