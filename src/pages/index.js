import React from "react"

import UiView from '../components/UiView/UiView'
import JsonTextArea from "../components/JsonTextArea/JsonTextArea";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonValue: {
        "type": "box",
        "message": "Hello",
        "background": "#058893",
        "children": [
          {
            "type": "text",
            "message": "foo"
          },
          {
            "type": "text",
            "message": "bar"
          },
          {
            "type": "box",
            "message": "bowtie",
            "background": "#FF5733",
            "children": [
              {
                "type": "text",
                "message": "insurance"
              }
            ]
          }
        ]
      }
    };
    this.onChange = this.onChange.bind(this)
  }

  /**
   * If the Json data is vaild, it will update the UiView
   * @param {Object} params - json-editor-ajrm return data 
   */
  onChange(params) {
    if (params.error === false) {
      this.setState({
        jsonValue: params.jsObject.jsonValue
      })
    }
  }


  render() {
    const { jsonValue } = this.state;
    return (
      <div>
        <JsonTextArea jsonValue={jsonValue} onChange={this.onChange} />
        <UiView param={jsonValue} />
      </div>
    );

  }
}

export default IndexPage
