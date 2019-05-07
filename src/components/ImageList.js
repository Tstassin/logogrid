import React from 'react'
import '../App.css'
import SortableComponent from './SortableComponent';

class ImageList extends React.Component {
    render() {
        return (
            <div>
                <div className="titleBar"><h1>LogoGrid</h1></div>
                <ul className="imageList">
                    {this.props.imageList.map(
                        (image, index) => {
                            return <li className="img" key={"image-" + index}>
                                <img src={image.preview} onClick={() => { this.props.deleteImage(index) }}
                                    alt={image.name + " - " + image.size + " bytes"} />
                            </li>
                        }
                    )}
                </ul>
                {console.log(this.props.imageList)}
                <SortableComponent axis={'xy'} imageList={this.props.imageList} onSortEnd={this.props.onSortEnd} deleteImage={this.props.deleteImage} />
                {this.props.imageList.length == 0 && <h2>Drop some images to start...</h2>}
            </div>
        )
    }
}

export default ImageList