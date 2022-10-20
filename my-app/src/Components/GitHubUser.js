import { useEffect } from "react"
import { useGitHubUser } from "./useGitHubUser"


export function GitHubUser({ username }) {
    const { data, error, loading, onFetchUser } = useGitHubUser(username)

    useEffect(() => {
        onFetchUser(username)

    }, [username])





    return <div>
        {loading && <h1>Loading data...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>The user's name is: {data.name}</h1>}
    </div>
}