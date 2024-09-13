// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewsDetails from './components/NewsDetails';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/news/:id" component={NewsDetails} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
