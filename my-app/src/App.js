import React from 'react';
import { Welcome } from './Components/Welcome'
import { Container } from './Components/Container';
import { Sum } from './Components/Sum';
import { ClickCounter } from './Components/ClickCounter';
import { Login } from './Components/Login'
import { Counter } from './Components/Counter';
import { GitHubUser } from './Components/GitHubUser';
import { GitHubUserList } from './Components/GitHubUserList';
import { HookCounter } from './Components/HookCounter';
import { CarDetails } from './Components/CarDetails';
import { FilteredList } from './Components/FilteredList';




export function App() {

   return (
        <div>
            <Container title={'React exercises'}>
                <Welcome /> <hr></hr>
                <Sum /> <hr></hr>
                <ClickCounter onCounterChange={(count) => {
                    return console.log('The counter is now ' + count)
                }} /> <hr></hr>
                <Login />
                <Counter initialValue={0} />
                <GitHubUser username={'GiuseppeFilannino'} />
                <GitHubUserList />
                <HookCounter />
                {/* <CarDetails /> */}
                <FilteredList />
            

            </Container >



        </div>
    )
}


