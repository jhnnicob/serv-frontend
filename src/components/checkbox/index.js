import React from 'react';
import './Checkbox.css';
export default function Checkbox({label}) {
    return (
        <div className="checkbox">
            <input type="checkbox" />
            <label>{label}</label>
        </div>
    )
}
