import React from "react";
import { useLogin } from "./useLogin";



export function Login() {

    const { data, userLogin, resetLogin, getUser } = useLogin()





    return (


        <div>

            <label>Insert username:</label><input name="username" value={data.username} onChange={getUser}></input><br />
            <label>Insert password:</label><input name="password" value={data.password} onChange={getUser} type="password"></input><br />
            <label>Checkbox:</label><input name="remember" checked={data.remember} onChange={getUser} type="checkbox"></input><br />
            <button name="login" type="button" onClick={userLogin} disabled={!data.username || !data.password}>Login</button>
            <button onClick={resetLogin} >Reset</button>
        </div>
    )
}


