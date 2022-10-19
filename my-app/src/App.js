import React from 'react';
import { Welcome } from './Components/Welcome'
import { Container } from './Components/Container';
import { Sum } from './Components/Sum';





export function App() {

    return (
        <div>
            <Container title={'React exercises'}>
                <Welcome /> <hr></hr>
                <Sum numbers={[2, 4, 6, 8, 9, 32]} />
            </Container >



        </div>
    )
}


