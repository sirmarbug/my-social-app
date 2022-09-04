import {Button, Dialog, DialogActions, DialogContent, DialogTitle, styled, TextField} from "@mui/material";
import {useFormik} from "formik";
import {newPostValidation} from "../../helpers/validations";
import {useEffect} from "react";

const Form = styled("form")(() => ({
    width: '100%'
}))

const SavePostDialog = (props) => {
    const { open, onClose, onSubmit, post } = props

    useEffect(() => {
    }, [post])

    const submit = (values) => {
        console.log(JSON.stringify(values))
        onSubmit(values)
    }

    const formik = useFormik({
        initialValues: {
            text: post ? post.text : ''
        },
        validationSchema: newPostValidation,
        onSubmit: submit,
        enableReinitialize: true
    })

    return (
        <>
            <Dialog open={open} fullWidth maxWidth="md" onClose={onClose}>
                <DialogTitle>{post ? 'Edytuj post' : 'Dodaj nowy post'}</DialogTitle>
                <Form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="text"
                            label="Treść postu"
                            type="text"
                            fullWidth
                            multiline
                            variant="standard"
                            value={formik.values.text}
                            onChange={formik.handleChange}
                            error={formik.touched.text && Boolean(formik.errors.text)}
                            helperText={formik.touched.text && formik.errors.text}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit">{post ? 'Edytuj' : 'Dodaj'}</Button>
                    </DialogActions>
                </Form>
            </Dialog>
        </>
    )
}

export default SavePostDialog
