import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import {TextField, Typography, Box, styled} from "@mui/material";
import {useFormik} from "formik";
import {loginValidationSchema} from "../../helpers/validations";

const Form = styled("form")(() => ({
    width: '100%'
}))

const Login = () => {
    const history = useHistory()

    // const [counter, setCounter] = useState(0)
    //
    // const increment = () => {
    //     setCounter(counter + 1)
    // }
    //
    // const decrement = () => {
    //     setCounter(counter - 1)
    // }

    const submit = (values) => {
        console.log(JSON.stringify(values))
        history.push('/posts')
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginValidationSchema,
        onSubmit: submit
    })

    const goToRegister = () => {
        history.push('/register')
    }

    return (
        <AuthLayout>
            <Typography mb={2} variant="h4">
                Logowanie
            </Typography>
            <Typography mb={4} variant="body1">
                Zaloguj się aby zacząć korzystać z systemu
            </Typography>
            <Form onSubmit={formik.handleSubmit}>
                <Box mb={4} width="100%">
                    <TextField
                        label="Adres E-mail"
                        variant="standard"
                        fullWidth
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box mb={4} width="100%">
                    <TextField
                        label="Hasło"
                        variant="standard"
                        fullWidth
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Box>
                <Button
                    variant="contained"
                    type="submit"
                >
                    Zaloguj
                </Button>
            </Form>
            <Box mt={4} width="100%">
                Nie masz jeszcze konta?
                <Button variant="string" onClick={goToRegister}>Zarejestruj się</Button>
            </Box>
        </AuthLayout>
    )
}

export default Login