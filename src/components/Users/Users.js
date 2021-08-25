import s from "./users.module.css"
import userPhoto from "../../../src/assets/img/unnamed.png"
import React from "react";
import {NavLink} from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    cardMedia: {
        paddingTop: "100%",

    },
    cardContent: {
        flexGrow: 1
    },

}))
const Users = (props) => {
    const classes = useStyles()
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <Grid container spacing={4}>

            {props.users.map((card) => (

                <Grid item key={card} xs={12} sm={6} md={2}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}
                                   image={card.photos.small || card.photos.large != null ? card.photos.small : userPhoto}
                                   title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                {card.name}
                            </Typography>
                            <Typography>
                                {card.status}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <NavLink to={"/Profile/" + card.id}>
                                <Button size="small" color="primary" variant="contained">
                                    View
                                </Button>
                            </NavLink>
                            <Box>
                                {card.followed

                                    ? <Button size="small" variant="contained" color="secondary"
                                              disabled={props.isFetchingFollow.some(id => id === card)} onClick={() => {
                                        props.unfollowSuccess(card)
                                    }}>Unfollow</Button>
                                    : <Button size="small" variant="contained" color="primary"
                                              disabled={props.isFetchingFollow.some(id => id === card)} onClick={() => {
                                        props.followSuccess(card)

                                    }}>Follow</Button>
                                }
                            </Box>

                        </CardActions>
                    </Card>
                </Grid>

            ))}

        </Grid>

        <Container className={s.selectedPageAll}>
            {pages.map((p) => {

                return <span key={p} className={props.currentPage.toString() === p.toString() ? s.selectedPage : null}
                             onClick={() => {
                                 props.onePageChanged(p)
                             }}> {p} </span>
            })}


        </Container>

    </div>
}


export default Users