import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div>
                <div><h1>{this.props.title}</h1></div>
                <div className="children-container">{this.props.children}</div>
            </div>
        )
    }
}