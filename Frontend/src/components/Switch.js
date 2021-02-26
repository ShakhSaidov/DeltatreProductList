/* eslint-disable linebreak-style */
import React, { useState, useImperativeHandle } from "react"
import PropTypes from "prop-types"
import productStyles from "./ProductStyles"
import { Button, CardActions, IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const Switch = React.forwardRef((props, ref) => {
    const [visibility, setVisibility] = useState(false)
    const styles = productStyles()

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
        <div>
            <div style={hide}>
                <IconButton
                    edge="start"
                    className={styles.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={switchButton}
                >
                    <AddIcon/>
                </IconButton>
            </div>
            <div style={show}>
                {props.children}
                <CardActions className={styles.cardActions}>
                    <Button
                        className={styles.button} variant="contained"
                        color="primary"
                        onClick={switchButton}>
                        cancel
                    </Button>
                </CardActions>
            </div>
        </div>


    )
})

Switch.displayName = "Switch"

Switch.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Switch

/*
<CardActions className={styles.cardActions}>
                    <Button
                        className={styles.button} variant="contained"
                        color="primary"
                        onClick={switchButton}>
                        {props.buttonLabel}
                    </Button>
                </CardActions>
*/