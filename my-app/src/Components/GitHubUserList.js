import React, { useEffect, useState } from "react";
import { GitHubUser } from "./GitHubUser";

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
            <ul>{userList.map((user, index) => {
                return (
                    <li><GitHubUser key={index} username={user} /></li>
                )
            })}


            </ul>
        </div>
    )
}