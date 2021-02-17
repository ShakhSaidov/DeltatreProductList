import React from 'react'

const Message = ({ message, empty }) => {
    let text = message
    if (text === null || empty) {
        if (empty) text = "Products list is empty! Maybe add some?"
        else return null
    }

    return (
        <div className="center">
            <h2 className="alert alert-warning center w-50" role="alert">{text}</h2>
        </div>
    )

}

export default Message