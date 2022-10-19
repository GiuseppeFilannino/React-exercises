import React, { useState } from "react";



export function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,


    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData(data => {
            return {
                ...data,

                [name]: type === 'checkbox' ? checked : value
            }
        })


    }



    function handleResetLogin() {

        setData({
            username: '',
            password: '',
            remember: false,
            loginStatus: true

        })
    }

    function handleLogin() {
        console.log(data)
        setData({
            username: '',
            password: '',
            remember: false,
            loginStatus: true

        })
    }





    return (


        <div>

            <label>Insert username:</label><input name="username" value={data.username} onChange={handleInputChange}></input><br />
            <label>Insert password:</label><input name="password" value={data.password} onChange={handleInputChange} type="password"></input><br />
            <label>Checkbox:</label><input name="remember" checked={data.remember} onChange={handleInputChange} type="checkbox"></input><br />
            <button name="login" type="button" onClick={handleLogin} disabled={!data.username || !data.password}>Login</button>
            <button onClick={handleResetLogin} >Reset</button>
        </div>
    )
}


