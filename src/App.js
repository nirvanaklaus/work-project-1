//import React (and React.Component)
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

//import pages
import Dashboard from './pages/dashboard/dashboard.component';
import SignIn from './pages/sign-in/sign-in-component';
import Register from './pages/register/register.component';
import Header from './components/header/header.component'

//import stylesheet
import './App.css';


const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
const users = [
  {
    firstName: "Nicklaus",
    lastName: "Nightingale",
    email: "nicklausnightingale@gmail.com",
    password: "sunshine"
  },
  {
    firstName: "Sally",
    lastName: "Wally",
    email: "sallywally@gmail.com",
    password: "walsall"
  },

]

  class App extends Component {
  constructor() {
    super();


    this.state = {
      isSignedIn: false,
    }
  }

  render() {
    return (
      <div>
        <Particles className="particles"
          params={particleOptions}
        />
        <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" render={(props) => <SignIn {...props} users={users}/>} />
          <Route exact path="/signup" render={(props) => <Register {...props} users={users} isSignedIn={this.state.isSignedIn}/>} />
        </Switch>
      </div>
    )
  }

}

export default App;
