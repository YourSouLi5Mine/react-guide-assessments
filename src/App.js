import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Jorge'
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    return (
      <div>
        <UserInput changed={this.usernameChangeHandler} />
        <UserOutput username='Naye' />
        <UserOutput username='Angie' />
        <UserOutput username={this.state.username} />
      </div>
    )
  }
}

export default App;
