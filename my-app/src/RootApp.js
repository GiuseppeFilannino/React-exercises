import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Components/Welcome';

export function RootApp() {
    return (
        <Routes >
            <Route path='/' element={<Welcome  name='Jimmy'/>}>

            </Route>
        </Routes>
    )
}