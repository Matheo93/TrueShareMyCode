import { createContext, useState, useEffect } from 'react';
import { get } from 'axios';

export const CodeContext = createContext();

export const CodeContextProvider = ({ children }) => {
  const [codes, setCodes] = useState([]);

  const addCode = (newCode) => {
    setCodes([...codes, newCode]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await get('/api/codes');
        setCodes(response.data);
      } catch (error) {
        console.error('Error fetching codes:', error);
        setCodes([]);
      }
    }

    fetchData();
  }, []);

  // Create a serverless function to handle API requests
  export async function handler(req, res) {
    try {
      // Sample data (replace with your actual data)
      const codes = [
        { id: 1, title: 'Sample Code 1', content: 'console.log("Hello, World!");' },
        { id: 2, title: 'Sample Code 2', content: 'document.getElementById("root").innerHTML = "Hello, React!";' },
      ];

      res.status(200).json(codes);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  return (
    <CodeContext.Provider value={{ codes, addCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => React.useContext(CodeContext);