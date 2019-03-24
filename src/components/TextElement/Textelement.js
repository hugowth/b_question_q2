import React from "react"
import PropTypes from "prop-types"

const TextElement = param => {
    const { message, background } = param

    return (
        < div style={{ backgroundColor: background }}>
            <p>{message}</p>
        </div >)
}

TextElement.propTypes = {
    param: PropTypes.shape({}),
}

export default TextElement;