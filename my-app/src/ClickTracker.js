import React from "react"

export class ClickTracker extends React.Component {
    state = {
        target: ''
    }


    handleClickTracker = (event) => {
        const value = event.target.innerText
        // console.log(event.target.innerText)


        this.setState(() => {
            return {
                target: value
            }
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickTracker}>Button 1 </button>
                <button onClick={this.handleClickTracker}>Button 2 </button>
                <button onClick={this.handleClickTracker}>Button 3</button>
                <h1>The last button pressed was : {this.state.target}</h1>
            </div>
        )
    }

}