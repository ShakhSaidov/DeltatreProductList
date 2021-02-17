/* eslint-disable linebreak-style */
import React, { useState, useImperativeHandle } from "react"
import PropTypes from "prop-types"

const Switch = React.forwardRef((props, ref) => {
    const [visibility, setVisibility] = useState(false)

    const hide = { display: visibility ? "none" : "" }
    const show = { display: visibility ? "" : "none" }

    const switchButton = () => {
        setVisibility(!visibility)
    }

    useImperativeHandle(ref, () => {
        return {
            switchButton
        }
    })

    return (
        <div className="container h-100">
            <div className="form-group center" style={hide}>
                <button className="btn btn-primary" onClick={switchButton}>{props.buttonLabel}</button>
            </div>
            <div className="form-group center" style={show}>
                {props.children}
                <button className="btn btn-primary" onClick={switchButton}>cancel</button>
            </div>
        </div>


    )
})

Switch.displayName = "Switch"

Switch.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Switch