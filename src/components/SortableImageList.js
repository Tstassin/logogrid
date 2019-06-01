import React, { Component } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import '../App.css'

const SortableItem = SortableElement(
    ({ value, index, deleteImage }) =>
        <li className="img" key={"image-" + index}>
            <img src={value.preview} onClick={() => { deleteImage(index) }}
                alt={value.name + " - " + value.size + " bytes"} />
        </li>
)

const SortableList = SortableContainer(({ items, deleteImage }) => {
    return (
        <ul className="imageList">
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} deleteImage={deleteImage} />
            ))}
        </ul>
    )
})

class SortableImageList extends Component {

    onSortEnd = ({ oldIndex, newIndex }) => {
        console.log(this.props.imageList, oldIndex, newIndex)
        this.props.imageOperations.moveImage(oldIndex, newIndex)
    }
    render() {
        return (
            <div>
                <div className="titleBar"><h1>logogrid</h1></div>
                <SortableList
                    axis={'xy'}
                    pressDelay={50} 
                    imageOperations={this.props.imageOperations}
                    items={this.props.imageOperations.imageList} 
                    onSortEnd={this.onSortEnd} 
                    deleteImage={this.props.imageOperations.deleteImage}
                />
                {this.props.imageOperations.imageList.length === 0 && <h2>Drop some images to start...</h2>}
            </div>
        )
    }
}

export default SortableImageList