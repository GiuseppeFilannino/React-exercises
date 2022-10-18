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
import { TodoList } from './TodoList';
import { Container } from './Container';


const login = (dati) => {
    console.log(dati)
}

export class App extends React.Component {
    render() {
        return (

            <Container title={'React exercises'}>
                <HelloWorld /> <hr></hr>
                <Welcome /> <hr></hr>
                <Counter /> <hr></hr>
                <ClickCounter /> <hr></hr>
                <ClickTracker /> <hr></hr>
                <InteractiveWelcome /> <hr></hr>
                <Login onLogin={login} /> <hr></hr>
                <UncontrolledLogin /> <hr></hr>
                {/* <TodoList
                    render={(item) => {
                        const [...state.items,newArray] = item
                        return (
                            <div>
                              
                                <ul>


                                    {this.state.items.map((item) => <li>{item}<button id={item} onClick={this.handleRemoveElement}>Remove</button></li>)}

                                </ul>
                            </div>
                        )
                    }} >
                </TodoList> */}

                <TodoList />
            </Container>
        )
    }
}

Age.defaultProps = {
    age: "27"

}