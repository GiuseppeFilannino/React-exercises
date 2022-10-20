import React from "react";



export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        
        console.log(event.target.type)

        this.setState({
            [name]: type === 'checked' ? checked : value
        })

    }



    render() {
        return (


            <div>

                <label>Insert username:</label><input value={this.state.username} name='username' onChange={this.handleInputChange}></input><br />
                <label>Insert password:</label><input value={this.state.password} name='password' onChange={this.handleInputChange} type="password"></input><br />
                <label>Checkbox:</label><input checked={this.state.remember} name='remember' onChange={this.handleInputChange} type="checkbox"></input>




            </div>
        )
    }
}

