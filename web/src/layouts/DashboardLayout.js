import {
    Box,
    Container
} from "@mui/material";
import AppBar from "./DashboardLayout/AppBar";
import {useEffect} from "react";
import {fetchCurrentUser, resetUser} from "../store/currentUserSlice";
import {useDispatch} from "react-redux";

const DashboardLayout = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser())

        return () => {
            dispatch(resetUser())
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar/>
            <Container maxWidth="md" sx={{ padding: '1rem' }}>
                { props.children }
            </Container>
        </Box>
    )
}

export default DashboardLayout
