import * as React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Edit from './components/customer/Edit';
import Create from './components/customer/Create'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}> Home </Link>
          </li>
          <li>
            <Link to={'/create'}> Create Customer </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/create'} exact component={Create} />
        <Route path={'/edit/:id'} exact component={Edit} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
