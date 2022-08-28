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
import {resetUser, selectCurrentUser, setUser} from "../../store/currentUserSlice";

const MyAppBar = () => {
    const history = useHistory()

    const [openAddPostDialog, setOpenAddPostDialog] = useState(false)

    const openAddPostDialogHandle = () => {
        setOpenAddPostDialog(true)
    }

    const closeAddPostDialogHandle = () => {
        setOpenAddPostDialog(false)
    }

    const submitAddPostDialogHandle = () => {
        setOpenAddPostDialog(false)
        console.log('submitAddPostDialogHandle')
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
        history.push('/')
    }

    const currentUser = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const setUserHandle = () => {
        dispatch(setUser())
    }

    const resetUserHandle = () => {
        dispatch(resetUser())
    }

    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={dashboardPage}>
                    MySocialApp
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                    { currentUser.firstName } { currentUser.lastName }
                </Typography>
                <Button color="inherit" sx={{ mr: 2 }} onClick={setUserHandle}>SET</Button>
                <Button color="inherit" sx={{ mr: 2 }} onClick={resetUserHandle}>RESET</Button>
                <Button color="inherit" sx={{ mr: 2 }} onClick={openAddPostDialogHandle}>+</Button>
                <SavePostDialog
                    open={openAddPostDialog}
                    onClose={closeAddPostDialogHandle}
                    onSubmit={submitAddPostDialogHandle}
                />
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="user">MB</Avatar>
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
