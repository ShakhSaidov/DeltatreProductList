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
    <div className="container">
      <div className="text-right" style={hideWhenShown}>
        <button className="btn btn-primary" onClick={switchButton}>{props.buttonLabel}</button>
      </div>
      <div className="text-right" style={showWhenShown}>
        {props.children}
        <button className="btn btn-primary" onClick={switchButton}>cancel</button>
      </div>
    </div>
  )
})

export default Switch