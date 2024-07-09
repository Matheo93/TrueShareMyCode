import { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

export const CodeContext = createContext();

export const CodeContextProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);

  const addCode = async (newCode) => {
    const newCodes = [...codes, newCode];
    setCodes(newCodes);
    const res = await saveCodes(newCodes);
    if (!res.ok) {
      throw new Error('Failed to save codes');
    }
  };

  useEffect(() => {
    async function fetchCodes() {
      const data = await getCodes();
      setCodes(data);
    }

    fetchCodes();
  }, []);

  return (
    <CodeContext.Provider value={{ codes, addCode }}>
      {children}
    </CodeContext.Provider>
  );
};

async function saveCodes(codes) {
  const res = await fetch('/api/codes', {
    method: 'PUT',
    body: JSON.stringify(codes),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res;
}

async function getCodes() {
  const res = await fetch('/api/codes');
  if (!res.ok) {
    throw new Error('Failed to fetch codes');
  }
  const data = await res.json();
  return data;
}

export const useCodeContext = () => React.useContext(CodeContext);