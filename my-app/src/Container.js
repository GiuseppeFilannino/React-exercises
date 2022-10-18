import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div >
                <div className="children-container">{this.props.children}</div>
            </div>
        )
    }
}