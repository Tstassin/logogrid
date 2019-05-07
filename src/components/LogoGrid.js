import React from 'react'

class LogoGrid extends React.Component {
    render() {
        return (
            <div className="logogrid">
                {this.props.imageList.map(
                    (image, index) => {
                        return <img key={"logo-"+index} src={image.preview} />
                    }
                )}
            </div>
        )
    }
}

export default LogoGrid