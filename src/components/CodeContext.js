import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CodeContext = createContext();

export const CodeContextProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/codes');
        setCodes(response.data);
      } catch (error) {
        console.error('Error fetching codes:', error);
        setCodes([]);
      }
    }

    fetchData();
  }, []);

  return (
    <CodeContext.Provider value={{ codes }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => React.useContext(CodeContext);