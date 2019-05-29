import React from 'react'
import arrayMove from 'array-move'

class ImageContainer extends React.PureComponent {

    state = {
        imageList: []
    }

    deleteImage = (index) => {
        URL.revokeObjectURL(this.state.imageList[index].preview)
        this.setState({
            imageList: this.state.imageList.filter((_, i) => i !== index)
        })
    }

    addImages = (newImages) => {
        newImages.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
        this.setState({ imageList: [...this.state.imageList, ...newImages] })
        console.log(this.state.imageList)
    }

    moveImage = (oldIndex, newIndex) => {
        if (oldIndex !== newIndex)
            this.setState(
                { imageList: arrayMove(this.state.imageList, oldIndex, newIndex) }, () => { console.log(this.state.imageList) }
            )
    }

    render() {
        return (
            <div id="imageContainer">
                {React.cloneElement(
                    this.props.children,
                    {
                        imageOperations: {
                            deleteImage: this.deleteImage,
                            addImages: this.addImages,
                            moveImage: this.moveImage,
                            imageList: this.state.imageList
                        }
                    }
                )}
            </div>
        )
    }
}
export default ImageContainer