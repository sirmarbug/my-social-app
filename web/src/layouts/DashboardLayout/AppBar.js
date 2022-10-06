import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    AppBar, Button,
} from "@mui/material";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import SavePostDialog from "../../components/dialogs/SavePostDialog";
import {useDispatch, useSelector} from "react-redux";
import {resetUser, selectCurrentUser} from "../../store/currentUserSlice";
import {createPost} from "../../api/post";
import {addNewPost, resetItems} from "../../store/postsSlice";

const MyAppBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [openAddPostDialog, setOpenAddPostDialog] = useState(false)

    const openAddPostDialogHandle = () => {
        setOpenAddPostDialog(true)
    }

    const closeAddPostDialogHandle = () => {
        setOpenAddPostDialog(false)
    }

    const submitAddPostDialogHandle = async (data) => {
        const { data: response } = await createPost(data)
        dispatch(addNewPost(response))
        setOpenAddPostDialog(false)
    }

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    const dashboardPage = () => {
        history.push('/posts')
    }

    const myPosts = () => {
        handleCloseUserMenu()
        history.push('/my-posts')
    }

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(resetUser())
        dispatch(resetItems())
        history.push('/')
    }

    const currentUser = useSelector(selectCurrentUser)

    const initials = `${currentUser.firstName?.charAt(0)}${currentUser.lastName?.charAt(0)}`

    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={dashboardPage}>
                    MySocialApp
                </Typography>
                <Button color="inherit" sx={{ mr: 2 }} onClick={openAddPostDialogHandle}>+</Button>
                <SavePostDialog
                    open={openAddPostDialog}
                    onClose={closeAddPostDialogHandle}
                    onSubmit={submitAddPostDialogHandle}
                />
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="user">{initials}</Avatar>
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={myPosts}>
                            <Typography textAlign="center">Moje posty</Typography>
                        </MenuItem>
                        <Divider/>
                        <MenuItem onClick={logout}>
                            <Typography textAlign="center">Wyloguj</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar
