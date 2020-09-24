import React from 'react';
import "./App.css"
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Pokemons from '../Pokemons/Pokemons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/pokemons" component={Pokemons}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
      <h3>Just another home page.</h3>
      <h5>You know where to poké ;)</h5>
  </div>
)

export default App;
