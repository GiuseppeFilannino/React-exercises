import React from "react";
import { CounterDisplay } from "./CounterDisplay";


export class Counter extends React.Component {
    
    state = {
        count: this.props.initialValue,

    }


    componentDidMount() {

                // il costruttore non è più necessario

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.amount,
                    counter: state.counter + this.props.amount

                }
            })
        }, this.props.interval)
    }



    render() {
        return (

            <div>

                <CounterDisplay count={this.state.count} />


            </div>
        )
    }
}
Counter.defaultProps = {
    initialValue: 0,
    interval: 1000,
    amount: 1,

}
