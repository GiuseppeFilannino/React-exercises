import React from "react"

export class TodoList extends React.Component {

    state = {
        items: [],
        element: ''
    }



    handleGetElement = (event) => {
        const targetValue = event.target.value



        this.setState(() => {
            return {
                element: targetValue

            }

        })
    }

    handleAddElement = () => {

        const newElement = this.state.element

        this.setState(() => {
            return {
                items: [...this.state.items, newElement],
                element: ''
            }
        })
    }


    handleResetArray = () => {
        this.setState(() => {
            return {
                items: []
            }
        })
    }


    handleRemoveElement = (event) => {
        const buttonId = event.target.id
        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i] === buttonId) {
                this.setState(() =>
                    this.state.items.splice(this.state.items.indexOf(buttonId), 1)
                )

            }
        }


    }

    render() {
        return (
            <div>

                <label>Insert Element to add:</label><input value={this.state.element} onChange={this.handleGetElement}></input>
                <button onClick={this.handleAddElement}>Add</button>
                <button onClick={this.handleResetArray}>Reset</button>
                <ul>


                    {this.state.items.map((item) => <li>{item}<button id={item} onClick={this.handleRemoveElement}>Remove</button></li>)}

                </ul>
            </div>
        )
    }
}