import React from 'react'

class FlexMenu extends React.Component {

    state = {
        properties: [
            {
                name: "flex-direction",
                values: [
                    { value: "row" },
                    { value: "column" },
                    { value: "row-reverse" },
                    { value: "column-reverse" },
                ],
                active: 0
            }
        ]
    }

    switch = (index, value) => {
        console.log(index, value)
        this.setState({
            properties: [
                ...this.state.properties.slice(0, index), 
                { ...this.state.properties[index], active: value }, 
                ...this.state.properties.slice (index + 1, -1)
            ]
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.properties.map((property, propertyIndex) => (
                            <tr name={property.name} index={propertyIndex} key={property.name}>
                                <td>
                                    <div>{property.name}</div>
                                </td>

                                {property.values.map((value, valueIndex) => (
                                    <td name={value.value} index={valueIndex} key={property.name + '-' + value.value}
                                        className={property.active === valueIndex ? "active" : undefined}>
                                        <a href="#" onClick={() => this.switch(propertyIndex, valueIndex)}>{value.value}</a>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default FlexMenu