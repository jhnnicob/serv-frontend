import React from 'react';
import './Modal.css';

export function Modal({open, handleOpen, children}) {

    return (
        <div 
            className={`modal ${open ? "modal__open" : "modal__close"}`}
            
        >
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}

