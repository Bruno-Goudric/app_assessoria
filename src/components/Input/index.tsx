import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface InputProps{
    name: string;
    type: string;
    placeholder: string;
}

const Input = ({name, type, placeholder}: InputProps) => {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            
        })
    }, [fieldName, registerField])

    return (
        <input ref={inputRef} type={type} placeholder={placeholder} />
    )
}

export default Input;