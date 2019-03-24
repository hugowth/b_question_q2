import React from "react"
import PropTypes from "prop-types"
import HtmlElement from '../HtmlElement/HtmlElement'

const UiView = ({ param }) => (
    <div>
        <HtmlElement {...param}></HtmlElement>
    </div>
)

UiView.propTypes = {
    jsonValue: PropTypes.shape({}),
}

export default UiView;