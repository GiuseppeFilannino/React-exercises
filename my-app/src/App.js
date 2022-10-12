import React from 'react';
import { HelloWorld } from './HelloWorld';
import { Welcome } from './Welcome'
import { Age } from "./Age"


export class App extends React.Component {
    render() {
        return (
         
            <div>
                <HelloWorld />
                <Welcome  />

            </div>
        )
    }
}

Age.defaultProps = {
    age: "27"

}