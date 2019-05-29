import React from 'react'
import '../App.css'
import SortableComponent from './SortableComponent';

class ImageList extends React.Component {
    render() {
        return (
            <div>
                <div className="titleBar"><h1>LogoGrid</h1></div>
                <SortableComponent axis={'xy'} imageOperations={ this.props.imageOperations } />
                {this.props.imageOperations.imageList.length == 0 && <h2>Drop some images to start...</h2>}
            </div>
        )
    }
}

export default ImageList