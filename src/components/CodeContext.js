import { createContext, useState, useEffect } from'react';
import { getStorage, setStorage } from '@vercel/storage';

export const CodeContext = createContext();

export const CodeContextProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);

  const addCode = (newCode) => {
    setCodes([...codes, newCode]);
    setStorage('codes', codes);
  };

  useEffect(() => {
    async function fetchCodes() {
      const storedCodes = await getStorage('codes');
      if (storedCodes) {
        setCodes(storedCodes);
      }
    }

    fetchCodes();
  }, []);

  return (
    <CodeContext.Provider value={{ codes, addCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => React.useContext(CodeContext);