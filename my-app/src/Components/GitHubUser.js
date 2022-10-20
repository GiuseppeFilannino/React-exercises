import { useEffect, useState } from "react"


export function GitHubUser({ username }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function fetchGitHubUser(username) {


        setLoading(true)
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

            setLoading(false)
        }

    }

    useEffect(() =>{
    fetchGitHubUser(username)
   } ,[username])





    return <div>
       
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>{data.name}</h1>}
    </div>
}