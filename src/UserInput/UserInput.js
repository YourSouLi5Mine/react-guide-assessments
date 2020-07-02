import React, { Component} from 'react'
import './UserInput.css'

//Remember to use this on class based components and don't use const/let for
//attributes of the class
class UserInput extends Component {
  render() {
    return (
      <input
        type='text'
        className='userInput'
        onChange={this.props.changed}
        value={this.props.username} />
    )
  }
}

export default UserInput
