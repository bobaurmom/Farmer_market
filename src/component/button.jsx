import React from 'react';
import '../style/button.css';

function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="custom-button"
    >
      {children}
    </button>
  );
}

export default Button;
