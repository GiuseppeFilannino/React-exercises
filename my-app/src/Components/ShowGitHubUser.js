import{useParams} from "react-router-dom"
import { GitHubUser } from "./GitHubUser"

export function ShowGitHubUser({username}){
// const {username} = useParams()
return(
    <div>
        <h1><GitHubUser username={username} /> </h1>
    </div>
    )
}