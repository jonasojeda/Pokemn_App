import React from 'react';
import {Route, Switch, Redirect} from 'react-router'
import './App.css';
import LandingPage from './pages/landingPage/LandingPage.jsx';
import Home from './pages/home/Home.jsx';
import PokemonCreate from './pages/pokemonCreate/PokemonCreate.jsx'
import PokemonDetail from './pages/pokemonDetail/PokemonDetail.jsx';
import NotFound from './components/notFound/NotFound';
import TypesPokemon from './components/typesPokemon/TypesPokemon';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/detail:id"} component={PokemonDetail} />
        <Route exact path={"/create"} component={PokemonCreate} />
        
      </Switch>

    </div>
  );
}

export default App;
