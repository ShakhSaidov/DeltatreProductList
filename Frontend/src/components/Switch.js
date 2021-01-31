import React, { useState, useImperativeHandle } from 'react'

const Switch = React.forwardRef((props, ref) => {
  const [show, setShow] = useState(false)

  const hideWhenShown = { display: show ? 'none' : '' }
  const showWhenShown = { display: show ? '' : 'none' }

  const switchButton = () => {
    setShow(!show)
  }

  useImperativeHandle(ref, () => {
    return {
      switchButton
    }
  })

  return (
    <div>
      <div style={hideWhenShown}>
        <button onClick={switchButton}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenShown}>
        {props.children}
        <button onClick={switchButton}>cancel</button>
      </div>
    </div>
  )
})

export default Switch