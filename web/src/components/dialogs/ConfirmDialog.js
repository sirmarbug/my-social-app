import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmDialog = (props) => {
    const { open, onClose, onConfirm, title, text } = props

    return (
        <Dialog
            open={open}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="string" onClick={onClose}>Anuluj</Button>
                <Button variant="contained" onClick={onConfirm} autoFocus>
                    Potwierdź
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
