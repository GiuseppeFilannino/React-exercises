import React, { useEffect,useState } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({ initialValue }) {

    const [count, setCount] = useState(initialValue)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1)
        }, 1000)
        return () => clearInterval(interval)

    },[count])







    return (

        <div>

            <CounterDisplay count={count} />


        </div>
    )
}


