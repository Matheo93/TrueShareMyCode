import { createContext, useState, useEffect } from 'react';
import vercel from '@vercel/storage';

const CodeContext = createContext();
const CodeProvider = ({ children }) => {
    const [codes, setCodes] = useState(() => {
        // Initialize state from Vercel Storage
        const savedCodes = vercel.get('codes');
        return savedCodes ? JSON.parse(savedCodes) : [];
    });

    const addCode = (code) => {
        setCodes((prevCodes) => {
            const newCodes = [...prevCodes, { ...code, id: prevCodes.length }];
            console.log('Adding code:', newCodes);
            vercel.set('codes', JSON.stringify(newCodes)); // Save to Vercel Storage
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

export { CodeContext, CodeProvider };