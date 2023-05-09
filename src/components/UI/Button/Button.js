import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick} style={{background:props.buttonStyle===false? '#9c4980':'#8b005d'}}>
      {props.children}
    </button>
  );
};

export default Button;
