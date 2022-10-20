import { useEffect, useRef } from 'react'

export function CarDetails({ model = 'Fiat', year = '2010', color = 'red' }) {

    const inputRef = useRef()

    function handleFormSubmit(event) {



        event.preventDefault()

        const model = event.target.elements.model.value
        const year = event.target.elements.year.value
        const color = event.target.elements.color.value





    }
    useEffect(() => {
        console.log({ model, year, color })
    }, [])










    function handleInputChange() {
        
    }

    return (
        <div>
            <h2>Car Form </h2>
            <form ref={inputRef} onSubmit={handleFormSubmit}>
                <label>Insert model of the car:</label><input onChange={handleInputChange} value={model}></input><br></br>
                <label>Insert year of the car:</label><input value={year}></input><br></br>
                <label>Insert color of the car:</label><input value={color}></input><br></br>
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}