import React, { Component } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(
    ({ value, index }) => 
        <li className="img" key={"image-" + index}>
            <img src={value.preview} onClick={() => { this.props.deleteImage(index) }}
                alt={value.name + " - " + value.size + " bytes"} />
        </li>
)

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    )
})

class SortableComponent extends Component {

    render() {
        console.log(this.props.imageList)
        return <SortableList items={this.props.imageList} onSortEnd={this.props.onSortEnd} />;
    }
}

export default SortableComponent