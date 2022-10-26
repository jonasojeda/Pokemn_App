import React from 'react';
import {Route, Switch, Redirect} from 'react-router'
import './App.css';
import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>

      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/home"} component={Home} />
      </Switch>

    </div>
  );
}

export default App;
