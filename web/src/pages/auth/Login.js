import {useState} from "react";
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

const Login = () => {
    const history = useHistory()

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const goToRegister = () => {
        history.push('/posts')
    }

    return (
        <div>
            <h1>Login</h1>
            {counter}
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
            <Button onClick={goToRegister}>Rejestracja</Button>
        </div>
    )
}

export default Login