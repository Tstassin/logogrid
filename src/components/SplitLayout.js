import React from 'react'
import '../App.css'

class SplitLayout extends React.Component {

    render() {
        return (
            <div>
                <div className="titleBar"><h1>LogoGrid</h1></div>
                <div className="leftPanel">
                    {React.cloneElement(this.props.children[0], { imageList: this.props.imageList, deleteImage: this.props.deleteImage })}
                </div>
                <div className="rightPanel">
                    {React.cloneElement(this.props.children[1], { imageList: this.props.imageList })}
                </div>
            </div>
        )
    }
}

export default SplitLayout