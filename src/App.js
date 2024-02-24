import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './frontend/signup';
import Login from './frontend/login';
import ProductList from './frontend/productlist';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={ProductList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
