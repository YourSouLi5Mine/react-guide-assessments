import React, { useState } from 'react'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = () => {
  const [userState, setUserState] = useState({
    username: 'Jorge'
  })

  const usernameChangedHandler = (event) => {
    setUserState({username: event.target.value})
  }

  return (
    <div>
      <UserInput changed={usernameChangedHandler} username={userState.username} />
      <UserOutput username='Naye' />
      <UserOutput username='Angie' >Some more text</UserOutput>
      <UserOutput username={userState.username} />
    </div>
  )
}

export default App
