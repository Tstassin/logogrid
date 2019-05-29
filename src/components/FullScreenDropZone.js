import React from 'react'
import Dropzone from 'react-dropzone'

class FullScreenDropZone extends React.Component {
    state = {
        accept: 'image/*',
        dropzoneActive: false
    }

    onDragEnter = () => this.setState({ dropzoneActive: true })
    onDragLeave = () => this.setState({ dropzoneActive: false })
    onDrop = (newImages) => {
        this.props.imageOperations.addImages(newImages)
        this.setState({ dropzoneActive: false })
    }

    render() {

        const { accept, dropzoneActive } = this.state
        const { imageList} = this.props

        return (
            <Dropzone
                disableClick
                style={{ position: "relative" }}
                accept={accept}
                onDrop={this.onDrop}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
            >
                {({ getRootProps }) => (
                    <div {...getRootProps()}>

                        {dropzoneActive && <div className="overlayStyle">Drop files...</div>}

                        <div>{React.cloneElement(this.props.children, { imageOperations: this.props.imageOperations } )}</div>

                    </div>
                )}
            </Dropzone>
        )
    }
}

export default FullScreenDropZone