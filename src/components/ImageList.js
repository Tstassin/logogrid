import React from 'react'
import '../App.css'
import SortableComponent from './SortableComponent';

class ImageList extends React.Component {
    render() {
        return (
            <div>
                <div className="titleBar"><h1>LogoGrid</h1></div>
                <SortableComponent axis={'xy'} imageList={this.props.imageList} onSortEnd={this.props.onSortEnd} deleteImage={this.props.deleteImage} />
                {this.props.imageList.length == 0 && <h2>Drop some images to start...</h2>}
            </div>
        )
    }
}

export default ImageList