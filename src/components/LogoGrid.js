import React from 'react'
import SizeWrapper from "./SizeWrapper"

class LogoGrid extends React.Component {
    render() {
        return (
            <div className="logogrid">
                <SizeWrapper width={this.props.globals.width} height={this.props.globals.height}>
                    <div className="canvas" id="canvas" style={{ ...this.props.properties, ...this.props.globals, display: "flex", background: "white" }}>
                        {this.props.imageOperations.imageList.map(
                            (image, index) => {
                                return (
                                    <div key={"logo-" + index} style={{ ...this.props.inputs }} >
                                        <img src={image.preview} alt="" />
                                    </div>
                                )
                            }
                        )}
                    </div>
                </SizeWrapper>
            </div>
        )
    }
}

export default LogoGrid