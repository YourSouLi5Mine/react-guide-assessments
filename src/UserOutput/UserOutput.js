import React from 'react'

const userOutput = (props) => {
  const userOutput = {
    margin: '20px',
    padding: '10px',
    border: '1px solid #aaa',
    borderRadius: '3px',
    width: '50%',
    boxShadow: '1px 2px 3px #ccc'
  }

  const title = {
    fontWeight: '600',
    color: 'red'
  }

  return (
    <div style={userOutput}>
      <p style={title}>{props.username}</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <p>{props.children}</p>
    </div>
  )
}

export default userOutput
