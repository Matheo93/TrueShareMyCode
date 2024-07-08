import React, { createContext, useState, useEffect } from 'react';

export const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
    const [codes, setCodes] = useState(() => {
        // Initialize state from local storage
        const savedCodes = localStorage.getItem('codes');
        return savedCodes ? JSON.parse(savedCodes) : [];
    });

    const addCode = (code) => {
        setCodes(prevCodes => {
            const newCodes = [...prevCodes, { ...code, id: prevCodes.length }];
            console.log('Adding code:', newCodes);
            localStorage.setItem('codes', JSON.stringify(newCodes)); // Save to local storage
            return newCodes;
        });
    };

    useEffect(() => {
        console.log('Codes state updated:', codes);
    }, [codes]);

    return (
        <CodeContext.Provider value={{ codes, addCode }}>
            {children}
        </CodeContext.Provider>
    );
};