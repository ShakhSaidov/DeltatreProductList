import React from 'react'

const Message = ({message}) => {
  if(message === null){
    return null
  }

  else {
    return (
      <h2 className="center">{message}</h2>
    )
  }
}

export default Message