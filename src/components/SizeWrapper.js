import React from 'react'

class SizeWrapper extends React.PureComponent {

    render() {
        let wrapperName = this.props.children.props.id + "Wrapper"
        return (
            <div className={wrapperName}>
                <div style={{ display: "table-row" }} className={wrapperName + " row"}>
                    <div style={{ display: "table-cell" }} className={wrapperName + " corner"}></div>
                    <div style={{ display: "table-cell" }} className={wrapperName + " width size"}>
                        <div className="size">{this.props.width}</div>
                    </div>
                </div>
                <div style={{ display: "table-row" }} className={wrapperName + " row"}>
                    <div style={{ display: "table-cell" }} className={wrapperName + " height size"}>
                        <div className="size">{this.props.height}</div>
                    </div>
                    <div style={{ display: "table-cell" }} className={wrapperName + " content"}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default SizeWrapper