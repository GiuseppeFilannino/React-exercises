import React from 'react';
import { HelloWorld } from './Components/HelloWorld';
import { Welcome } from './Components/Welcome'
import { Age } from "./Components/Age"
import { Counter } from './Components/Counter';
import { ClickCounter } from './Components/ClickCounter';
import { ClickTracker } from './Components/ClickTracker';
import { InteractiveWelcome } from './Components/InteractiveWelcome';
import { Login } from './Components/Login';
import { UncontrolledLogin } from './Components/UncontrolledLogin';
import { TodoList } from './Components/TodoList';
import { Container } from './Components/Container';
import { LanguageContext } from './Components/LanguageContext';
import {DisplayLanguage} from './Components/DisplayLanguage'


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
                    <option value='fr'>FRANCESE</option>
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