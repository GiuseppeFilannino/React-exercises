import React from 'react';
import { HelloWorld } from './HelloWorld';
import { Welcome } from './Welcome'
import { Age } from "./Age"
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { UncontrolledLogin } from './UncontrolledLogin';


const login = (dati) => {
console.log(dati)}

export class App extends React.Component {
    render() {
        return (
         
            <div>
                <HelloWorld /> <hr></hr>
                <Welcome  /> <hr></hr>
                <Counter /> <hr></hr>
                <ClickCounter /> <hr></hr>
                <ClickTracker /> <hr></hr>
                <InteractiveWelcome /> <hr></hr>
                <Login  onLogin = {login} /> <hr></hr>
                <UncontrolledLogin />
             

            </div>
        )
    }
}

Age.defaultProps = {
    age: "27"

}