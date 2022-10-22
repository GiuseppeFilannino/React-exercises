import { Routes, Route,Link } from 'react-router-dom';
import { Counter } from './Components/Counter';
import { Welcome } from './Components/Welcome';
import { ShowGitHubUser } from './Components/ShowGitHubUser';

export function RootApp() {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link> ! <Link to='/counter'>ShowCounter</Link> | <Link to='/users/:username'>Show my GitHub name</Link>
            </div>
        <Routes >

            <Route path='/' element={<Welcome name='Jimmy' />} />
            <Route path='counter' element={<Counter initialValue={0} />} />
            <Route path='users/:username' element={<ShowGitHubUser username={'GiuseppeFilannino'} />} />
            <Route path='*' element={<div><p>Not Found</p> <Link to="/" >Go Home</Link></div>} />
         
        


        </Routes>
        </div>
    )
}