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
import moment from "moment";
import {removePostApi, updatePost} from "../api/post";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts, fetchMyPosts, removePost} from "../store/postsSlice";
import {useLocation} from "react-router-dom";
import {selectCurrentUser} from "../store/currentUserSlice";

const PostCard = ({ post }) => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [deletePostConfirmDialog, setDeletePostConfirmDialog] = useState(false)

    const openDeleteConfirmDialog = () => {
        setDeletePostConfirmDialog(true)
    }

    const closeDeleteConfirmDialog = () => {
        setDeletePostConfirmDialog(false)
    }

    const confirmDeleteConfirmDialog = async () => {
        await removePostApi(post._id)
        dispatch(removePost(post._id))
        setDeletePostConfirmDialog(false)
    }

    const [openEditPostDialog, setOpenEditPostDialog] = useState(false)

    const openEditPostDialogHandle = () => {
        setOpenEditPostDialog(true)
    }

    const closeEditPostDialogHandle = () => {
        setOpenEditPostDialog(false)
    }

    const confirmEditPostDialogHandle = async (values) => {
        await updatePost(post._id, values)
        if (location.pathname === '/posts') {
            dispatch(fetchAllPosts())
        } else {
            dispatch(fetchMyPosts())
        }
        setOpenEditPostDialog(false)
    }

    const currentUser = useSelector(selectCurrentUser)

    const author = `${post.author.firstName} ${post.author.lastName}`
    const initials = `${post.author.firstName.charAt(0)}${post.author.lastName.charAt(0)}`
    const createdAt = moment(post.date).format('DD.MM.YYYY')

    return (
        <Card sx={{ maxWidth: '100%', marginBottom: '3rem' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500], fontSize: '1rem' }} aria-label="recipe" sizes="">
                        {initials}
                    </Avatar>
                }
                title={author}
                subheader={createdAt}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    { post.text }
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    post.userId === currentUser._id ?
                        <span></span> :
                        <IconButton aria-label="like">
                            <FavoriteIcon/>
                        </IconButton>
                }
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
                    id: post._id,
                    text: post.text
                }}
                onClose={closeEditPostDialogHandle}
                onSubmit={confirmEditPostDialogHandle}
            />
        </Card>
    );
}

export default PostCard
