import React from "react";



export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: '',
        loginStatus: true

    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

        // const type = event.target.type 
        // const checked = event.target.checked

        this.setState({
            [name]: value,
        })

        this.setState((state) => {

            return {
                loginStatus: !state.username.trim() || !state.password
            }
        })
    }

    handleLogin = () => {
        this.props.onLogin(this.state)
    }

    render() {
        return (


            <div>

                <label>Insert username:</label><input name="username" value={this.state.username} onChange={this.handleInputChange}></input><br />
                <label>Insert password:</label><input name="password" value={this.state.password} onChange={this.handleInputChange} type="password"></input><br />
                <label>Checkbox:</label><input name ="remember" value={this.state.remember} onChange={this.handleInputChange} type="checkbox"></input><br />
                <button name="login" type="button" onClick={this.handleLogin} disabled={this.state.loginStatus}>Login</button>

                {/* status = {this.state.status} */}


            </div>
        )
    }
}

Login.defaultPros = {

    onLogin: () => console.error('error')
}