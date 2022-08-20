import {Button, Dialog, DialogActions, DialogContent, DialogTitle, styled, TextField} from "@mui/material";
import {useState} from "react";
import {useFormik} from "formik";
import {newPostValidation} from "../../helpers/validations";

const Form = styled("form")(() => ({
    width: '100%'
}))

const AddNewPostDialog = () => {
    const [openAddPostDialog, setOpenAddPostDialog] = useState(false)

    const openAddPostDialogHandle = () => {
        setOpenAddPostDialog(true)
    }

    const closeAddPostDialogHandle = () => {
        setOpenAddPostDialog(false)
    }

    const submit = (values) => {
        console.log(JSON.stringify(values))
    }

    const formik = useFormik({
        initialValues: {
            text: ''
        },
        validationSchema: newPostValidation,
        onSubmit: submit
    })

    return (
        <>
            <Button color="inherit" sx={{ mr: 2 }} onClick={openAddPostDialogHandle}>+</Button>
            <Dialog open={openAddPostDialog} fullWidth maxWidth="md" onClose={closeAddPostDialogHandle}>
                <DialogTitle>Dodaj nowy post</DialogTitle>
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
                        <Button type="submit" onClick={closeAddPostDialogHandle}>Dodaj</Button>
                    </DialogActions>
                </Form>
            </Dialog>
        </>
    )
}

export default AddNewPostDialog
