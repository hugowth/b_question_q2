import React from "react"
import PropTypes from "prop-types"
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

const JsonTextArea = ({ jsonValue, onChange }) => (
    <JSONInput
        id='a_unique_id'
        placeholder={{ jsonValue }}
        locale={locale}
        height='550px'
        onChange={onChange}
    />
)

JsonTextArea.propTypes = {
    jsonValue: PropTypes.shape({}),
}

export default JsonTextArea;