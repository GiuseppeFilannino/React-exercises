import React from 'react';
import { Welcome } from './Components/Welcome'
import { Container } from './Components/Container';
import { Sum } from './Components/Sum';
import { ClickCounter } from './Components/ClickCounter';
import {Login} from './Components/Login'





export function App() {

    return (
        <div>
            <Container title={'React exercises'}>
                <Welcome /> <hr></hr>
                <Sum  /> <hr></hr>
                <ClickCounter onCounterChange={(count) =>{
                return console.log('The counter is now ' + count)
                }}/> <hr></hr>
                <Login />
            </Container >



        </div>
    )
}


