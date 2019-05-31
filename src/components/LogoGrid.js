import React from 'react'

class LogoGrid extends React.Component {
    render() {
        return (
            <div className="logogrid">
                <div className="canvasWrapper">
                    <div style={{ display: "table-row" }} className="canvasWrapper row">
                        <div style={{ display: "table-cell" }} className="canvasWrapper corner"></div>
                        <div style={{ display: "table-cell" }} className="canvasWrapper width size">
                            <div class="size">{this.props.globals.width}</div>
                        </div>
                    </div>
                    <div style={{ display: "table-row" }} className="canvasWrapper row">
                        <div style={{ display: "table-cell" }} className="canvasWrapper height size">
                            <div class="size">{this.props.globals.height}</div>
                        </div>
                        <div style={{ display: "table-cell" }} className="canvasWrapper content">
                            <div className="canvas" style={{ ...this.props.properties, ...this.props.globals, display: "flex", background: "white" }}>
                                {this.props.imageOperations.imageList.map(
                                    (image, index) => {
                                        return <img key={"logo-" + index} style={{ ...this.props.inputs }} src={image.preview} alt="" />
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div class="showSize width">
                        <div class="showSize height">

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LogoGrid