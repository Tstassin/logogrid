import React from 'react'
import Dropzone from 'react-dropzone'

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


    render() {

        const { accept, files, dropzoneActive } = this.state

        const thumbs = files.map(file => (
            <div className="thumb" key={file.name}>
                <div className="thumbInner">
                    <img
                        src={file.preview}
                        className="img"
                    />
                </div>
            </div>
        ))

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

                        <div>{this.props.children}</div>

                        <h2>Dropped files</h2>
                        <ul>
                            {files.map((f, index) => <li key={"image-" + index}>{f.name} - {f.size} bytes</li>)}
                        </ul>
                        {thumbs}

                    </div>
                )}
            </Dropzone>
        )
    }
}

export default FullScreenDropZone