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
import { LanguageContext } from './LanguageContext';
import {DisplayLanguage} from './DisplayLanguage'


const login = (dati) => {
    console.log(dati)
}

export class App extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value,
        })
    }


    render() {
        return (
            <div>
                <Container title={'React exercises'}>
                    <HelloWorld /> <hr></hr>
                    <Welcome /> <hr></hr>
                    <Counter /> <hr></hr>
                    <ClickCounter /> <hr></hr>
                    <ClickTracker /> <hr></hr>
                    <InteractiveWelcome /> <hr></hr>
                    <Login onLogin={login} /> <hr></hr>
                    <UncontrolledLogin /> <hr></hr>
                    <TodoList
                        render={(items, handleRemoveElement) => {
                            return (
                                <ul>
                                    {items.map((item) => <li>{item}<button id={item} onClick={handleRemoveElement}>Remove</button></li>)}


                                </ul>)
                        }}
                    >
                    </TodoList>
                </Container >
                <h2>Context</h2>

                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value='en'>ENGLISH</option>
                    <option value='it'>ITALIANO</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }
}

Age.defaultProps = {
    age: "27"

}