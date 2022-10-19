import React from 'react';
import { Welcome } from './Components/Welcome'
import { Container } from './Components/Container';
import { Sum } from './Components/Sum';
import { ClickCounter } from './Components/ClickCounter';





export function App() {

    return (
        <div>
            <Container title={'React exercises'}>
                <Welcome /> <hr></hr>
                <Sum  /> <hr></hr>
                <ClickCounter /> <hr></hr>
            </Container >



        </div>
    )
}


