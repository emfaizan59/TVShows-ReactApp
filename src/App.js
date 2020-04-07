import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import './App.css';
import Header from './components/elements/Header/Header'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import tvShow from './components/tvShow/tvShow';
function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={tvShow} path="/:showId" exact />
        <Route component={NotFound} exact />
      </Switch>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
