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
                items: [...this.state.items, newElement]
            }
        })
      

       



    }

    render() {
        return (
            <div>

                <label>Insert Element to add:</label><input onChange={this.handleGetElement}></input>
                <button onClick={this.handleAddElement}>Add</button>
                <ul>


                    {this.state.items.map((item) => <li>{item}</li>)}

                </ul>
            </div>
        )
    }
}