import React, { useEffect, useState } from "react";
import { GitHubUser } from "./GitHubUser";
import { Link, Outlet } from "react-router-dom"

export function GitHubUserList() {

    const [user, setUser] = useState('')
    const [userList, setUserList] = useState([])

    function handleGetUser(event) {
        const newUser = event.target.value
        setUser(newUser)
    }

    function handleAddUser() {
        setUserList([...userList, user])
        setUser('')

    }


    useEffect(() => {
        console.log(userList)
    }, [userList])


    return (
        <div>
            <label>Insert the GitHubUser to show is name : </label><input name='user' value={user} onChange={handleGetUser}></input>
            <button onClick={handleAddUser}>Add</button>
            <div>
                {userList.map((user, index) => (

                    <div >
                        <Link key={index} to={user} > {user} </Link>
                        <Outlet />
                    </div>

                ))}
            </div>




            <Outlet />

        </div >
    )
}