import React from "react"
import PropTypes from "prop-types"

const TextElement = param => {
    const { message } = param

    return (
        <div>
            <p>{message}</p>
        </div>)
}

TextElement.propTypes = {
    param: PropTypes.shape({}),
}

export default TextElement;