import { useState } from "react"


export function useGitHubUser() {

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

    return { data, error, loading, onFetchUser: fetchGitHubUser }

}
