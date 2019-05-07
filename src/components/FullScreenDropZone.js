import React from 'react'
import Dropzone from 'react-dropzone'

class FullScreenDropZone extends React.Component {
    state = {
        accept: '',
        files: [],
        dropzoneActive: false
    }

    onDragEnter = () => this.setState({ dropzoneActive: true })
    onDragLeave = () => this.setState({ dropzoneActive: false })
    onDrop = (newfiles) => this.setState({ files: [...this.state.files, ...newfiles], dropzoneActive: false })

    render() {

        const { accept, files, dropzoneActive } = this.state;

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
                            {files.map(f => <li>{f.name} - {f.size} bytes</li>)}
                        </ul>

                    </div>
                )}
            </Dropzone>
        )
    }
}

export default FullScreenDropZone