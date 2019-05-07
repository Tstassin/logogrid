import React from 'react'
import '../App.css'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.webp'

class SplitLayout extends React.Component {

    state = {
        imageList: [
            {
                url: image1,
            },
            {
                url: image2,
            },
            {
                url: image3,
            },
            {
                url: image4,
            },
        ]
    }

    deleteImage = (index) => {
        this.setState({
            imageList: this.state.imageList.filter((_, i) => i !== index)
          })
    }

    render() {
        return (
            <div>
                <div className="titleBar"><h1>LogoGrid</h1></div>
                <div className="leftPanel">
                    {React.cloneElement(this.props.children[0], { imageList: this.state.imageList, deleteImage: this.deleteImage })}
                </div>
                <div className="rightPanel">
                    {React.cloneElement(this.props.children[1], { imageList: this.state.imageList })}
                </div>
            </div>
        )
    }
}

export default SplitLayout