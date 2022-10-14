import React from "react";



export class InteractiveWelcome extends React.Component {

    state = {
        name: ''
    }

    handleInputText = (event) => {
        const value = event.target.value

        this.setState(() => {
            return {
                name: value

            }
        })
    }



   
  



    render() {
        return (


            <div>
                <input  onChange={this.handleInputText}></input>
                <h1>Welcome, {this.state.name}</h1>


            </div>
        )
    }
}


