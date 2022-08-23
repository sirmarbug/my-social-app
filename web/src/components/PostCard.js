import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmDialog from "./dialogs/ConfirmDialog";
import {useState} from "react";
import SavePostDialog from "./dialogs/SavePostDialog";

const PostCard = () => {
    const [deletePostConfirmDialog, setDeletePostConfirmDialog] = useState(false)

    const openDeleteConfirmDialog = () => {
        setDeletePostConfirmDialog(true)
    }

    const closeDeleteConfirmDialog = () => {
        setDeletePostConfirmDialog(false)
    }

    const confirmDeleteConfirmDialog = () => {
        setDeletePostConfirmDialog(false)
        console.log('confirmDeleteConfirmDialog')
    }

    const [openEditPostDialog, setOpenEditPostDialog] = useState(false)

    const openEditPostDialogHandle = () => {
        setOpenEditPostDialog(true)
    }

    const closeEditPostDialogHandle = () => {
        setOpenEditPostDialog(false)
    }

    const confirmEditPostDialogHandle = () => {
        setOpenEditPostDialog(false)
        console.log('confirmEditPostDialogHandle')
    }

    return (
        <Card sx={{ maxWidth: '100%', marginBottom: '3rem' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500], fontSize: '1rem' }} aria-label="recipe" sizes="">
                        MB
                    </Avatar>
                }
                title="Mariusz Bugajski"
                subheader="21.08.2022"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <div>
                    <IconButton aria-label="edit" onClick={openEditPostDialogHandle}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={openDeleteConfirmDialog}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </CardActions>
            <ConfirmDialog
                open={deletePostConfirmDialog}
                onClose={closeDeleteConfirmDialog}
                onConfirm={confirmDeleteConfirmDialog}
                title="Potwierdź usunięcie postu"
                text="Czy jesteś pewny, że chcesz usunąć wybrarny post?"
            />
            <SavePostDialog
                open={openEditPostDialog}
                post={{
                    id: '',
                    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
                }}
                onClose={closeEditPostDialogHandle}
                onSubmit={confirmEditPostDialogHandle}
            />
        </Card>
    );
}

export default PostCard
