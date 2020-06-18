import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Demos from './components/Demos/Demos'

const App = () => (

  <BrowserRouter>
    <div className="app">
      <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/virtualplayground/:name" component={ Demos } />
          <Route path="*" component={ NotFound } />
        </Switch>
      {/*<Footer />*/}
    </div>
  </BrowserRouter>
);

export default App;