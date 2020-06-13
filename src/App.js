import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound'

const App = () => (

  <BrowserRouter>
    <div className="app">
      <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/nav/:name" component={ Home } />
          <Route path="*" component={ NotFound } />
        </Switch>
      {/*<Footer />*/}
    </div>
  </BrowserRouter>
);

export default App;