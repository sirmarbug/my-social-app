import {
    Box,
    Container
} from "@mui/material";
import AppBar from "./DashboardLayout/AppBar";

const DashboardLayout = (props) => {
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
