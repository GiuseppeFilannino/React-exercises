import { useEffect } from "react"
import { useGitHubUser } from "./useGitHubUser"


export function GitHubUser({ username }) {
    const { data, error, onFetchUser } = useGitHubUser(username)

    useEffect(() => {
        onFetchUser(username)
    })





    return <div>
        {error && <h1>There has been an error</h1>}
        {data && <h1>The user's name is: {data.name}</h1>}
    </div>
}