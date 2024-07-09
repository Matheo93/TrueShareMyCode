// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CodeEditor from "./components/CodeEditor";
import CodeView from "./components/CodeView";
import { CodeContextProvider } from "./components/CodeContext";

function App() {
  return (
    <Router>
      <CodeContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/code/:id" element={<CodeView />} />
        </Routes>
      </CodeContextProvider>
    </Router>
  );
}

export default App;