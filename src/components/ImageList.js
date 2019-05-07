import React from 'react'
import '../App.css'

class ImageList extends React.Component {
    render() {
        return (
            <ul className="imageList">
                {this.props.imageList.map(
                    (image, index) => {
                        return <li className="img" key={"image-"+index}><img src={image.preview} onClick={ () => { this.props.deleteImage(index) } } /></li>
                    }
                )}
            </ul>
        )
    }
}

export default ImageList