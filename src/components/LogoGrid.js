import React from 'react'
import FlexMenu from './FlexMenu';

class LogoGrid extends React.Component {
    render() {
        return (
            <div className="logogrid" style={{ ...this.props.properties, display: "flex"}}>
                {this.props.imageList.map(
                    (image, index) => {
                        return <img key={"logo-"+index} style={{...this.props.inputs}}src={image.preview} />
                    }
                )}
            </div>
        )
    }
}

export default LogoGrid