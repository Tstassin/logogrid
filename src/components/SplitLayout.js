import React from 'react'
import '../App.css'

class SplitLayout extends React.Component {

    state = {
        inputs: [
            {
                name: "flex-grow",
                camelName: "flexGrow",
                type: "number",
                value: 0,
            },
            {
                name: "flex-shrink",
                camelName: "flexShrink",
                type: "number",
                value: 1,
            },
            {
                name: "flex-basis",
                camelName: "flexBasis",
                type: "text",
                value: "auto",
            },
            {
                name: "width",
                camelName: "width",
                type: "text",
                value: "100%",
            },
            {
                name: "height",
                camelName: "height",
                type: "text",
                value: "auto",
            },
            {
                name: "padding",
                camelName: "padding",
                type: "text",
                value: "5px",
            },
            {
                name: "margin",
                camelName: "margin",
                type: "text",
                value: "5px",
            },
        ],
        properties: [
            {
                name: "flex-direction",
                camelName: "flexDirection",
                values: [
                    { value: "row" },
                    { value: "column" },
                    { value: "row-reverse" },
                    { value: "column-reverse" },
                ],
                active: 0,
            },
            {
                name: "flex-wrap",
                camelName: "flexWrap",
                values: [
                    { value: "nowrap" },
                    { value: "wrap" },
                    { value: "wrap-reverse" },
                ],
                active: 0,
            },
            {
                name: "justify-content",
                camelName: "justifyContent",
                values: [
                    { value: "flex-start" },
                    { value: "flex-end" },
                    { value: "center" },
                    { value: "space-between" },
                    { value: "space-around" },
                ],
                active: 0,
            },
            {
                name: "align-items",
                camelName: "alignItems",
                values: [
                    { value: "flex-start" },
                    { value: "flex-end" },
                    { value: "center" },
                    { value: "baseline" },
                    { value: "stretch" },
                ],
                active: 0,
            },
            {
                name: "align-content",
                camelName: "alignContent",
                values: [
                    { value: "flex-start" },
                    { value: "flex-end" },
                    { value: "center" },
                    { value: "space-between" },
                    { value: "space-around" },
                    { value: "stretch" },
                ],
                active: 0,
            },
        ]
    }

    switchValue = (event) => {
        event.persist()
        let inputIndex = parseInt(event.target.attributes.inputindex.nodeValue)
        this.setState({
            inputs: [
                ...this.state.inputs.slice(0, inputIndex),
                {...this.state.inputs[inputIndex], value: event.target.value },
                ...this.state.inputs.slice(inputIndex + 1, this.state.inputs.length)
            ]
        })
    }

    switch = (index, value) => {
        this.setState({
            properties: [
                ...this.state.properties.slice(0, index),
                { ...this.state.properties[index], active: value },
                ...this.state.properties.slice(index + 1)
            ]
        })
    }

    render() {
        let properties = {}
        this.state.properties.map(property => properties[property.camelName] = property.values[property.active].value)
        let inputs = {}
        console.log(inputs)
        this.state.inputs.map(input => inputs[input.camelName] = input.value)
        return (
            <div>
                <div className="topPanel">
                    {React.cloneElement(
                        this.props.children[0],
                        { imageOperations: this.props.imageOperations }
                    )}
                </div>
                <div className="leftPanel">
                    {React.cloneElement(
                        this.props.children[1],
                        {
                            switch: this.switch,
                            switchValue: this.switchValue.bind(this),
                            properties: this.state.properties,
                            inputs: this.state.inputs
                        }
                    )}
                </div>
                <div className="rightPanel">
                    {React.cloneElement(
                        this.props.children[2],
                        {
                            imageOperations: this.props.imageOperations,
                            properties: properties,
                            inputs: inputs
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default SplitLayout