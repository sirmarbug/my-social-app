import {Avatar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography, Button, AppBar} from "@mui/material";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const MyAppBar = () => {
    const history = useHistory()

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

    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={dashboardPage}>
                    MySocialApp
                </Typography>
                <Button color="inherit" sx={{ mr: 2 }}>+</Button>
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="user" />
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
