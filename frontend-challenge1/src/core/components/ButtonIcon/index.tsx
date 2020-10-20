import React from 'react';
import './styles.css';

type Props = {
   textButton: string;
}

const ButtonIcon = ({textButton}: Props) => {
   return (
      //<div className="button-icon-container">
         <button className="button-icon-content">
            <span className="button-icon-content-text">
               {textButton}
            </span>
         </button>
      //</div>
   );
}

export default ButtonIcon;