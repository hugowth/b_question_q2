import React from "react"
import PropTypes from "prop-types"
import TextElement from '../TextElement/Textelement'
import BoxElement from '../BoxElement/BoxElement'

const HtmlElement = param => {
    const { type } = param;

    if (type === 'box') {
        return (
            <BoxElement {...param}></BoxElement>
        )
    }
    else if (type === 'text') {
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