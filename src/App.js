import React, { Component } from 'react';
// import styles from '../styles/App.css'
import Header from './components/header';
import MockContent from './mock/countryRegionMock'
// import {​ BrowserRouter as Router, Route, Switch}​ from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CountriesApp from './components/CountriesApp';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <Router>
          <Header />
          <Switch>
            <Route exact path='/countryselector' component={CountriesApp} />
            <Route exact path='/todolist' component={TodoApp} />
          </Switch>
        </Router>
    );
  }
}
App.defaultProps = { Content: MockContent }

export default App;