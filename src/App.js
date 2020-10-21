import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Switch>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
