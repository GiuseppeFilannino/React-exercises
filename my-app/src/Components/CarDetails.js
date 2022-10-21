import { useRef, useState } from "react"

export function CarDetails() {
    const formEl = useRef()
    // const [Car, setCar] = useState([])


    function handleSubmit(event) {
        event.preventDefault();
        // const formInputs = [...formEl.current.elements]
       
   
        // const newSubmitted = formInputs.reduce(
        //     (car, input) => {
        //         return {
        //             ...car,
        //             [input.name]: input.value

        //         };
        //     },

        // );
        // console.log(Car)
        // setCar(prevSubmitted => [...prevSubmitted, newSubmitted])

        const model= event.target.elements.model.value
        const year= event.target.elements.year.value
        const color= event.target.elements.color.value

        console.log({
        model,year,color})




    }


    return (
        <div>
            <form ref={formEl} onSubmit={handleSubmit}>
                <label>Insert the model of the car:</label><input placeholder="Panda" name="model" ></input><br></br>
                <label>Insert the year of the car:</label><input placeholder="2016" name="year" ></input><br></br>
                <label>Insert the color of the car:</label><input placeholder="Red" name="color"></input><br></br>

                <button type="submit">Submit</button>
            </form>
            <h3>Submitted values</h3>
            <ul>
                {/* {Car.map((input, index) => (<li key={index}>
                    <ul>
                        <li>model: {input.value}</li>
                        <li>year: {input.year}</li>
                        <li>car: {input.color}</li>
                    </ul>
                </li> */}
                {/* ))} */}
            </ul>
        </div >

    )
}