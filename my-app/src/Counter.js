import React from "react";


export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    constructor(props) {
        super(props)


        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.amount
                }
            })
        }, this.props.interval)
    }


    render() {
        return (


            <div>
                <h1>Counter : {this.state.count}</h1>


            </div>
        )
    }
}
Counter.defaultProps = {
    initialValue : 0,
    interval: 1000,
    amount: 1,
    }
