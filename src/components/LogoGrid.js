import React from 'react'

class LogoGrid extends React.Component {
    render() {
        return (
            <div className="canvas" style={{ ...this.props.globals, background: "white" }}>
                <div className="logogrid" style={{ ...this.props.properties, display: "flex" }}>
                    {this.props.imageOperations.imageList.map(
                        (image, index) => {
                            return <img key={"logo-" + index} style={{ ...this.props.inputs }} src={image.preview} alt="" />
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default LogoGrid