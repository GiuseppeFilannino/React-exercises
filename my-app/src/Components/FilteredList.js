import { useMemo } from "react"

const objects = [
    {
        name: 'Adam',
        id: 1,
        age: 28
    },
    {
        name: 'Mike',
        id: 2,
        age: 17
    },
    {
        name: 'Tudor',
        id: 3,
        age: 45
    },
    {
        name: 'Lily',
        id: 4,
        age: 36
    },
    {
        name: 'Karol',
        id: 5,
        age: 14
    }
]



export function FilteredList() {
    const users = useMemo(() => objects.map((user) => user.age >= 18 && <li key={user.id}>{'Name: ' + user.name}-{user.age + ' years'}</li>), [])
    return (
        <div>
            <h3>List of adults</h3>
            <ul>
                {users}
            </ul>

        </div>
    )
}