import React from 'react'

const Message = ({message}) => {
  if(message === null){
    return null
  }

  else {
    return (
      <h2 class="alert alert-warning" role="alert">{message}</h2>
    )
  }
}

export default Message