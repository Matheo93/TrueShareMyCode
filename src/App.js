import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/editor" component={CodeEditor} />
          <Route path="/code/:id" component={CodeView} />
        </Switch>
      </CodeContextProvider>
    </Router>
  );
}

export default App;