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
        <div className="container h-100">
            <div className="form-group center" style={hideWhenShown}>
                <button className="btn btn-primary" onClick={switchButton}>{props.buttonLabel}</button>
            </div>
            <div className="form-group center" style={showWhenShown}>
                {props.children}
                <button className="btn btn-primary" onClick={switchButton}>cancel</button>
            </div>
        </div>


    )
})

export default Switch