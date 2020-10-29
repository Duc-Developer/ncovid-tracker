import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { routes } from './constants';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Redirect exact from="/" to="/home" />
        <Switch>
          {
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                render={props => (
                  <route.component {...props} route={route.routes} />
                )}
              />
            ))
          }
        </Switch>
      </Router>

    </div>
  );
}

export default App;
