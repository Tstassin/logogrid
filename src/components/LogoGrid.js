import React from 'react'

class LogoGrid extends React.Component {
    render() {
        return (
            <div className="logogrid">
                <div className="canvasWrapper">
                    <div class="showSize width">
                        <span class="size">{this.props.globals.width}</span>
                        <div class="showSize height">
                            <span class="size">{this.props.globals.height}</span>
                            <div className="canvas" style={{ ...this.props.properties, ...this.props.globals, display: "flex", background: "white" }}>
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

        )
    }
}

export default LogoGrid