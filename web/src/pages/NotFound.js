import AuthLayout from "../layouts/AuthLayout";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

const NotFound = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }

    return (
        <AuthLayout>
            <Typography mb={2} variant="h4">
                Nie znaleziono strony
            </Typography>
            <Typography mb={4} variant="body1">
                Przejdź na stronę główna
            </Typography>
            <Button
                variant="contained"
                size="small"
                onClick={goToHomePage}
            >
                Strona główna
            </Button>
        </AuthLayout>
    )
}

export default NotFound