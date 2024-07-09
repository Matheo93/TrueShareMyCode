import { createContext, useState, useEffect } from 'react';
import { KV } from '@vercel/kv';

const kv = new KV();

export const CodeContext = createContext();

export const CodeContextProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    async function fetchCodes() {
      const data = await kv.get('codes');
      setCodes(JSON.parse(data) || []);
    }

    fetchCodes();
  }, []);

  const addCode = async (newCode) => {
    const newCodes = [...codes, newCode];
    setCodes(newCodes);
    await kv.set('codes', JSON.stringify(newCodes));
  };

  return (
    <CodeContext.Provider value={{ codes, addCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => React.useContext(CodeContext);