import React from 'react';
import { HelloWorld } from './HelloWorld';
import { Welcome } from './Welcome'
import { Age } from "./Age"
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';


export class App extends React.Component {
    render() {
        return (
         
            <div>
                <HelloWorld />
                <Welcome  />
                <Counter />
                <ClickCounter />
             

            </div>
        )
    }
}

Age.defaultProps = {
    age: "27"

}