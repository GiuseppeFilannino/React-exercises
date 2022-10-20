import { useState } from "react"

export function useGitHubUser() {
    const [data, setData] = useState(null)
  
    const [error, setError] = useState(null)


    async function fetchGitHubUser(username) {


        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()

            if (response.status !== 200) {
                setError(new Error())
            }

            setData(json)

        } catch (err) {
            setError(err)
            setData(null)
        } finally {

         
        }

    }

 

    return{
        data,
        error,
        onFetchUser: fetchGitHubUser
    }
}