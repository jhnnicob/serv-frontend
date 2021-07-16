import React,{useState, useRef} from 'react';
import "./TextField.css";

export default function TextField({
    type,
    name, 
    label,
    value,
    onChange,
    errors
}) {

    const [focused, setFocused] = useState(false);
    const ref = useRef(null);
    return(
        <div
            className={`form-field 
                ${focused ? 'is-focused' : ''} 
                ${value && value.length > 0 ? 'has-value' : ''}`}>
            <div className="control">
            <label onClick={() => ref.current.focus()}>{label}</label>
                <input 
                    ref={ref}
                    type={type} 
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={(e) => setFocused(true)}
                    onBlur={() => {
                        setFocused(false);
                    }}
                />
            </div>
            {
                errors ? <span className="errorMessage">{errors}</span> : ""
            }
        </div>
    )
}

export function TextFields({
    name,
    label,
    value,
    onChange, 
    validations, 
    errors, 
    setErrors,
    type,}) {

    const [focused, setFocused] = useState(false);
    const ref = useRef(null);

    function validate(validations) {
        setErrors(prev => ({
            ...prev,
            [name]: validations
            .map((errorsFor) => errorsFor(value))
            .filter((errorMsg) => errorMsg.length > 0)
        }));
    }

    return (
        <div
            className={`form-field 
                ${focused ? 'is-focused' : ''} 
                ${value && value.length > 0 ? 'has-value' : ''}`}>
            
            <div className="control">
                <label onClick={() => ref.current.focus()}>{label}</label>
                <input 
                    name={name}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                        validate(validations);
                    }}
                    onFocus={(e) => setFocused(true)}
                    onBlur={() => {
                        setFocused(false);
                        validate(validations);
                    }}
                />
            </div>
            {
                errors && errors.length > 0 
                ? (<div className="has-error">{errors.join(", ")}</div> ) 
                : ( null )
            }
        </div>
    )
}
