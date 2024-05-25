// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import FavoritesPage from './components/FavoritesPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Router>
  );
};

export default App;
