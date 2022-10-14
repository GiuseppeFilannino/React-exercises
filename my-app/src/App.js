import React from 'react';
import { HelloWorld } from './HelloWorld';
import { Welcome } from './Welcome'
import { Age } from "./Age"
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';


export class App extends React.Component {
    render() {
        return (
         
            <div>
                <HelloWorld />
                <Welcome  />
                <Counter />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
             

            </div>
        )
    }
}

Age.defaultProps = {
    age: "27"

}