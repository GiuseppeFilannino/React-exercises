import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef()
    state = {
        loginStatus: true
    }


    handleFormSubmit = (event) => {


        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked


        console.log({
            username,
            password,
            remember
        })

      



    }

    handleLoginButton = (event) => {


        if (event.target.value) {


             this.setState(() => {
            
                return {

                    loginStatus: false

                }

            })
        }

    }

    handleFormPrefill = () => {
        this._formRef.current.elements.username.value = 'Billy'
        this._formRef.current.elements.password.value = 'Hello123'
        this._formRef.current.elements.remember.checked = true
    }









    render() {
        return (
            <div>
                <h1>Uncontrolled Login</h1>

                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <label >Insert username:</label> <input autoFocus onChange={this.handleLoginButton} name="username"
                    /> <br></br>
                    <label >Insert password:</label><input onChange={this.handleLoginButton} name="password" type="password"
                    /> <br></br>
                    <label >Checkbox:</label><input onChange={this.handleLoginButton} name="remember" type="checkbox"
                    /> <br></br>

                    <button type="submit" disabled={this.state.loginStatus}> Login</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={this.handleFormPrefill}>Prefill Form</button>
                </form>
            </div>
        )
    }
}

