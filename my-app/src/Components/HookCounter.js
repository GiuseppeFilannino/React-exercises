import { useCounter } from "./useCounter";

export function HookCounter({initialValue}) {

    const{counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return(
        <div>
            <h2>counter: {counter}</h2>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>)

}