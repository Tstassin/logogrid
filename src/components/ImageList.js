import React from 'react'
import '../App.css'

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
                {this.props.imageList.length == 0 && <h2>Drop some images to start...</h2>}
            </div>
        )
    }
}

export default ImageList