export function Sum({ numbers = [2, 4, 6, 8, 9, 21] }) {

    const result = numbers.reduce((previous, next) => {
        return previous + next

    })





    return (
        <div>
            <h1>La somma dei numeri è: {result}</h1>
        </div>
    )
}