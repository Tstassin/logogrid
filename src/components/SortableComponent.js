import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

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

class SortableComponent extends Component {

    render() {
        return <SortableList pressDelay={100} axis={this.props.axis} items={this.props.imageList} onSortEnd={this.props.onSortEnd} deleteImage={this.props.deleteImage} />;
    }
}

export default SortableComponent