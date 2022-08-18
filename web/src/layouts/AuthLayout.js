import {Grid, styled} from "@mui/material";

const GridWrapper = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '1rem'
}));

const AuthLayout = (props) => {
    return (
        <Grid container height="100vh" justifyContent="center" alignItems="center" >
            <GridWrapper item container xs={12} sm={4} alignItems="center" direction="column">
                { props.children }
            </GridWrapper>
        </Grid>
    )
}

export default AuthLayout