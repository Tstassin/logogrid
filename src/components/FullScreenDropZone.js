import React from 'react'
import Dropzone from 'react-dropzone'
import arrayMove from 'array-move';

class FullScreenDropZone extends React.Component {
    state = {
        accept: 'image/*',
        files: [],
        dropzoneActive: false
    }

    onDragEnter = () => this.setState({ dropzoneActive: true })
    onDragLeave = () => this.setState({ dropzoneActive: false })
    onDrop = (newFiles) => {
        newFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
        this.setState({ files: [...this.state.files, ...newFiles], dropzoneActive: false })
        console.log(this.state.files)
    }
    deleteImage = (index) => {
        URL.revokeObjectURL(this.state.files[index].preview)
        this.setState({
            files: this.state.files.filter((_, i) => i !== index)
        })
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        console.log(this.state.files, oldIndex, newIndex)
        this.setState(({ files }) => ({
            files: arrayMove(files, oldIndex, newIndex),
        }))
    }


    render() {

        const { accept, files, dropzoneActive } = this.state

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

                        <div>{React.cloneElement(this.props.children, { imageList: files, deleteImage: this.deleteImage, onSortEnd:this.onSortEnd })}</div>

                    </div>
                )}
            </Dropzone>
        )
    }
}

export default FullScreenDropZone