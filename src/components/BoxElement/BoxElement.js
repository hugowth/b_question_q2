import React from "react"
import PropTypes from "prop-types"
import HtmlElement from '../HtmlElement/HtmlElement'

import './BoxElement.css';

const BoxElement = param => {
    const { message, background, children } = param

    return (
        <div
            className="BoxElement"
            style={{ backgroundColor: background }}>
            <div className="title">{message}</div>
            <div className="children">
                {children.map((element, key) => {
                    return <HtmlElement key={key} {...element} ></HtmlElement>;
                })}
            </div>
        </div >
    )
}

BoxElement.propTypes = {
    param: PropTypes.shape({}),
}

BoxElement.defaultProps = {
  message: undefined,
  background: undefined,
  children: [],
};

export default BoxElement;