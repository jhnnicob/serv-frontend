import React from 'react';
import './Button.css';

export default function Button({children, 
    color, 
    size, 
    fullWidth, 
    onClick}) {
    return (
        <button 
            onClick={onClick}
            className={`btn ${color} ${size} ${fullWidth}`}>
            {children}
        </button>
    )
}