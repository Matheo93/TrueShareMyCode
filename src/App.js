import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CodeEditor from './components/CodeEditor';
import CodeView from './components/CodeView';
import { CodeContextProvider, useCodeContext } from './components/CodeContext';

function App() {
  return (
    <CodeContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/code/:id" element={<CodeView />} />
        </Switch>
      </Router>
    </CodeContextProvider>
  );
}

export default App;