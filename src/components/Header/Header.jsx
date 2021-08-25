import React from "react";
import {NavLink} from "react-router-dom";
import {
    AppBar, Avatar,
    Box,
    Button,
    Container,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
        position: "relative"
    },
    header:{
        padding: theme.spacing(1)
    }
}))

const Header = (props) => {
    const classes = useStyles()

    return (
        <AppBar className={classes.header} position="fixed">
            <Container>
                <Toolbar>
                    <IconButton className={classes.menuButton}
                                edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h5">Social Network</Typography>
                    <Box marginRight={1}>
                        {props.isAuth === true ?
                            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random"/> : null}
                    </Box>
                    <Box>
                        {props.isAuth === true
                            ? <Typography> {props.login} <Button onClick={props.logout} color="secondary"
                                                                 variant="contained">Log out</Button> </Typography>
                            : <NavLink to={"/login"}><Button color="primary" variant="contained">Log
                                in</Button></NavLink>}
                    </Box>


                </Toolbar>


            </Container>


        </AppBar>
    );
};
export default Header;
