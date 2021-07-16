import React, {useState, useEffect} from 'react';

export function useForm(initialState, 
    defualtError, callback, validate) {
    const [values, setValues] = useState({...initialState});
    const [errors, setErrors] = useState({});
    const [isSubmittng, setIsSubmtting] = useState(false);

    const handleOnChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmtting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmittng) {
            callback();
        }
    }, [errors])

    return {
        values,
        setValues,
        handleOnChange,
        handleOnSubmit,
        errors,
        setErrors
    }
}
