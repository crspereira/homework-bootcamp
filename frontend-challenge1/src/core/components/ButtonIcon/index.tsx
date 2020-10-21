import React from 'react';
import './styles.css';

type Props = {
   textButton: string;
}

const ButtonIcon = ({textButton}: Props) => {
   return (
         <button className="button-icon-content">
            <span className="button-icon-content-text">
               {textButton}
            </span>
         </button>
   );
}

export default ButtonIcon;