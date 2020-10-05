import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Myprofile from './components/pages/Myprofile';
import View from './components/pages/View';
// import Reports from './components/pages/Reports';
// import Products from './components/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Myprofile} />
          <Route path='/view' exact component={View} />
        </Switch>
      </Router>
    </>
  );
}

export default App;