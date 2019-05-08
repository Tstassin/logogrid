import React from 'react'
import '../App.css'

class SplitLayout extends React.Component {

    render() {
        return (
            <div>
                <div className="topPanel">
                    {React.cloneElement(this.props.children[0], { imageList: this.props.imageList, deleteImage: this.props.deleteImage, onSortEnd: this.props.onSortEnd })}
                </div>
                <div className="leftPanel">
                    {React.cloneElement(this.props.children[2])}
                </div>
                <div className="rightPanel">
                    {React.cloneElement(this.props.children[1], { imageList: this.props.imageList })}
                </div>
            </div>
        )
    }
}

export default SplitLayout