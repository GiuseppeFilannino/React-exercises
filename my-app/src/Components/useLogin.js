import { useState } from "react"

export function useLogin() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,


    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData(data => {
            return {
                ...data,

                [name]: type === 'checkbox' ? checked : value
            }
        })


    }



    function handleResetLogin() {

        setData({
            username: '',
            password: '',
            remember: false,
            loginStatus: true

        })
    }

    function handleLogin() {
        console.log(data)
        setData({
            username: '',
            password: '',
            remember: false,
            loginStatus: true

        })
    }
    return {
        data: data,
        getUser: handleInputChange,
        resetLogin: handleResetLogin,
        userLogin: handleLogin,

    }

}
