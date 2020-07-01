import React, { Component} from 'react'

class UserInput extends Component {
  render() {
    return (
      <input onChange={this.props.changed}></input>
    );
  };
};

export default UserInput;
