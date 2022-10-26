import{useParams,Link} from "react-router-dom"
import { GitHubUser } from "./GitHubUser"

export function ShowGitHubUser(){
const {username} = useParams()
return(
    <div>
        {/* <Link to='list'>Users List</Link> */}
        <h1><GitHubUser username={username} /> </h1>
    </div>
    )
}