import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Equipment from './Equipment';
import Reservation from './Reservation';
import ResultManagement from './ResultManagement';
import UserManagement from './UserManagement';
import Recycle from './Recycle';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar /><hr/>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route exact path='/Equipment' component={Equipment}/>
            <Route exact path='/Reservation' component={Reservation}/>
            <Route exact path='/ResultManagement' component={ResultManagement}/>
            <Route exact path='/UserManagement' component={UserManagement}/>
            <Route exact path='/Recycle' component={Recycle}/>
            <AmplifySignOut />
          </div>
        </Router>
      </div>
    );
  }
}

export default withAuthenticator(App);