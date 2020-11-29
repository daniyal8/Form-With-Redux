import React from 'react';
import './input.css'

const input = ({changed, value, placeholder, type}) => (
    <input
     placeholder={placeholder} 
     className="input" 
     onChange={changed} 
     value={value} 
     type={type}
      />
);
export default input;