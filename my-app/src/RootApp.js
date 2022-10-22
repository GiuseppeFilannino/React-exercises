import { Routes, Route } from 'react-router-dom';
import { Counter } from './Components/Counter';
import { Welcome } from './Components/Welcome';

export function RootApp() {
    return (
        <Routes >
            <Route path='/' element={<Welcome  name='Jimmy'/>} />
            <Route path='counter' element={<Counter  initialValue={0}/>} />

            
        </Routes>
    )
}