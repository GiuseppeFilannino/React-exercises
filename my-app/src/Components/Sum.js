export function Sum(props) {

    const numbers = props.numbers

    const result = numbers.reduce((previous, next) => {
        return previous + next

    })





    return (
        <div>
            <h1>La somma dei numeri è: {result}</h1>
        </div>
    )
}