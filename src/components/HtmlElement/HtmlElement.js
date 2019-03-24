import React from "react"
import PropTypes from "prop-types"
import TextElement from '../TextElement/Textelement'
import BoxElement from '../BoxElement/BoxElement'

const HtmlElement = param => {
    const { type, message, background } = param;

    if (type === 'box') {
        return (
            <BoxElement {...param}></BoxElement>
        )
    }
    else if (type === 'text') {
        let param = {
            message: message,
            background: background
        }
        return (
            <TextElement {...param}></TextElement>
        )
    }
    return <div></div>;
}

HtmlElement.propTypes = {
    jsonValue: PropTypes.shape({}),
}

export default HtmlElement;