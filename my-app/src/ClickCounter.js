import React from "react"

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue,
        
    }

    handleIncrementCounter = () => { 
        this.setState((state) =>{
        return {
            count: state.count + this.props.amount

        }
            
        })

    }
    render() {
        return (
            <div >
                <button onClick={this.handleIncrementCounter}>IncrementCounter</button> <h2>{this.state.count}</h2>
                
            </div>
        )
    }
}

ClickCounter.defaultProps= {
initialValue: 0,
amount:1
}