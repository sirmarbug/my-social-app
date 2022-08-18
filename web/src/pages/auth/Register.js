import {Box, styled, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import AuthLayout from "../../layouts/AuthLayout";
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import {registerValidationSchema} from "../../helpers/validations";

const Form = styled("form")(() => ({
    width: '100%'
}))

const Register = () => {
    const history = useHistory()

    const submit = (values) => {
        console.log(JSON.stringify(values))
        history.push('/')
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registerValidationSchema,
        onSubmit: submit
    })

    const goToLogin = () => {
        history.push('/')
    }

    return (
        <AuthLayout>
            <Typography mb={2} variant="h4">
                Rejestracja
            </Typography>
            <Typography mb={4} variant="body1">
                Utwórz konto aby zacząć korzystać z systemu
            </Typography>
            <Form onSubmit={formik.handleSubmit}>
                <Box mb={4} width="100%">
                    <TextField
                        label="Imię"
                        variant="standard"
                        fullWidth
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Box>
                <Box mb={4} width="100%">
                    <TextField
                        label="Nazwisko"
                        variant="standard"
                        fullWidth
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Box>
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
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Box>
                <Box mb={4} width="100%">
                    <TextField
                        label="Powtórz hasło"
                        variant="standard"
                        fullWidth
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </Box>
                <Button
                    variant="contained"
                    type="submit"
                >
                    Zarejestruj
                </Button>
            </Form>
            <Box mt={4} width="100%">
                Masz już konto?
                <Button variant="string" onClick={goToLogin}>Zaloguj się</Button>
            </Box>
        </AuthLayout>
    )
}

export default Register