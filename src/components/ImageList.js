import React from 'react'

class ImageList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.imageList.map(
                    (image, index) => {
                        return <li key={"image-"+index}><img src={image.url} /></li>
                    }
                )}
            </ul>
        )
    }
}

export default ImageList