import { useState } from "react"
import useSWR, { mutate } from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGitHubUser(username) {


    const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    function refetchData() {
        mutate()
    }




    return {
        data,
        error,
        loading: !data && !error,
        refetchData

    }
}