import React, { useEffect, useState } from "react"

export function ClickCounter(props, { initialValue = 0 }) {
    const [count, setCount] = useState(initialValue)

    useEffect(() => {
        props.onCounterChange(count)
    })

    function handleIncrementCounter() {
        setCount((c) => c + 1)


    }



    return (
        <div >
            <h1> Counter :{count}</h1>
            <button onClick={handleIncrementCounter}>IncrementCounter </button>

        </div>
    )

}

