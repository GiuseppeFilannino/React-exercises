import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Components/Counter';
import { Welcome } from './Components/Welcome';
import { ShowGitHubUser } from './Components/ShowGitHubUser';
import { GitHubUser } from './Components/GitHubUser';
import { GitHubUserList } from './Components/GitHubUserList';
import { Message } from './Components/Message';

export function RootApp() {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link> ! <Link to='counter'>ShowCounter</Link> | <Link to='users'>Show my GitHub name</Link>
            </div>
            <Routes >

                <Route path='/' element={<Welcome name='Jimmy' />} />
                <Route path='counter' element={<Counter initialValue={0} />} />
                <Route path='users' element={<GitHubUserList  />} >
                    <Route index element={<h2>Add a username and select it</h2>}/>
                    <Route path=':username' element={<ShowGitHubUser />} />
                </Route>
                <Route  path='message' element={<Message />}></Route>
                <Route path='*' element={<div><p>Not Found</p> <Link to="/" >Go Home</Link></div>} />
                




            </Routes>
           
        </div>
    )
}