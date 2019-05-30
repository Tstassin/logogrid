import React from 'react'

class FlexMenu extends React.Component {

    render() {
        return (
            <div className="flexMenu">
                <table className="flexTable">
                    <tbody>
                        {this.props.globals.map((global, globalIndex) => (
                            <tr name={global.name} index={globalIndex} key={global.name}>
                                <td>
                                    <div className="globalName">{global.name}</div>
                                </td>
                                <td>
                                    <input globalindex={globalIndex} type={global.type} value={global.type === "number" ? parseInt(global.value) : global.value} onChange={this.props.switchGlobalValue} />
                                </td>
                            </tr>
                        ))}
                        <hr />
                        {this.props.properties.map((property, propertyIndex) => (
                            <tr name={property.name} index={propertyIndex} key={property.name}>
                                <td>
                                    <div className="propertyName">{property.name}</div>
                                </td>
                                <td>
                                    {property.values.map((value, valueIndex) => (
                                        <span
                                            name={value.value}
                                            index={valueIndex}
                                            key={property.name + '-' + value.value}
                                            className={property.active === valueIndex ? "propertyValue active" : "propertyValue"}>
                                            <a href="#" onClick={() => this.props.switch(propertyIndex, valueIndex)}>{value.value}</a>
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                        <hr />
                        {this.props.inputs.map((input, inputIndex) => (
                            <tr name={input.name} index={inputIndex} key={input.name}>
                                <td>
                                    <div className="inputName">{input.name}</div>
                                </td>
                                <td>
                                    <input inputindex={inputIndex} type={input.type} value={input.type === "number" ? parseInt(input.value) : input.value} onChange={this.props.switchValue} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default FlexMenu