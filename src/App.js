import React, { Component } from 'react';
import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Logout from './Logout';

import {Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='ui grid'>
        <TopBar />
        <div className='spacer row' />
        <div className='row'>
          <PrivateRoute path='/albums' component={AlbumsContainer} />
          <Route path='/login' component={Login} />
          <Route path='logout' component={Logout} />
          <Route exact path='/' render={() => (
            <Redirect to='/albums' />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
