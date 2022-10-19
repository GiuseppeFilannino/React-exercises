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
                <button onClick={this.handleIncrementCounter}>IncrementCounter &gt; </button> <nobr><strong>{this.state.count}</strong></nobr>
                
            </div>
        )
    }
}

ClickCounter.defaultProps= {
initialValue: 0,
amount:1
}