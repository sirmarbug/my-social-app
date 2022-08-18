import * as Yup from 'yup'

export const loginValidationSchema = new Yup.ObjectSchema({
    email: Yup.string()
        .required('Adres E-mail jest wymagany')
        .email('Nieprawidłowy format adresu E-mail'),
    password: Yup.string()
        .required('Hasło jest wymagane')
})
