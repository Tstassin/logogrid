import React from 'react'
import SizeWrapper from "./SizeWrapper"

class LogoGrid extends React.Component {
    render() {
        return (
            <div>
                <div className="logogrid">
                    <div className="canvasWrapper">
                        <div style={{ display: "table-row" }} className="canvasWrapper row">
                            <div style={{ display: "table-cell" }} className="canvasWrapper corner"></div>
                            <div style={{ display: "table-cell" }} className="canvasWrapper width size">
                                <div className="size">{this.props.globals.width}</div>
                            </div>
                        </div>
                        <div style={{ display: "table-row" }} className="canvasWrapper row">
                            <div style={{ display: "table-cell" }} className="canvasWrapper height size">
                                <div className="size">{this.props.globals.height}</div>
                            </div>
                            <div style={{ display: "table-cell" }} className="canvasWrapper content">
                                <div className="canvas" id="canvas" style={{ ...this.props.properties, ...this.props.globals, display: "flex", background: "white" }}>
                                    {this.props.imageOperations.imageList.map(
                                        (image, index) => {
                                            return <img key={"logo-" + index} style={{ ...this.props.inputs }} src={image.preview} alt="" />
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logogrid">
                    <SizeWrapper width={this.props.globals.width} height={this.props.globals.height}>
                        <div className="canvas" id="canvas" style={{ ...this.props.properties, ...this.props.globals, display: "flex", background: "white" }}>
                            {this.props.imageOperations.imageList.map(
                                (image, index) => {
                                    return <img key={"logo-" + index} style={{ ...this.props.inputs }} src={image.preview} alt="" />
                                }
                            )}
                        </div>
                    </SizeWrapper>
                </div>
            </div>
        )
    }
}

export default LogoGrid