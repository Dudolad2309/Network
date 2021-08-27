import React from "react";
import Preloader from "../../../common/preloader/Preloader";
import StatusProfileWithHooks from "./StatusProfileWithHooks";
import userPhoto from "../../../assets/img/unnamed.png";
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
	Paper,
	Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardMedia: {
		paddingTop: "40%",
	},
	cardContent: {
		flexGrow: 1,
	},
	mainFeaturesPost: {
		position: "relative",
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,.5)",
	},
	mainFeaturesPostContent: {
		position: "relative",
		padding: theme.spacing(10),
		marginTop: theme.spacing(3),
	},
	large: {
		height: theme.spacing(19),
		width: theme.spacing(19),
	},
}))
const ProfileInfo = (props) => {
	const classes = useStyles()
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<>
			<Paper className={classes.mainFeaturesPost}
			       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
				<Container fixed>
					<div className={classes.overlay}/>
					<Grid container>
						<Grid item md={6}>
							<div className={classes.mainFeaturesPostContent}>
								<Typography component="h1" variant="h3" color="inherit" gutterBottom>
									<StatusProfileWithHooks updateStatus={props.updateStatus} status={props.status}/>
								</Typography>
								<Typography variant="h5" color="inherit" paragraph>
									Использование этого подхода в продакшене не рекомендуется - клиент вынужден
									загружать целую библиотеку независимо от того, какие компоненты он реально
									использует. Это плохо влияет на производительность.
								</Typography>
							</div>

						</Grid>
					</Grid>
				</Container>
			</Paper>
			<Container>
				<Box>
					<Grid item xs={12}>
						<Card >
							<CardMedia className={classes.cardMedia}
							           image={props.profile.photos.large || props.profile.photos.small != null
								           ? props.profile.photos.large : userPhoto}
							           title="Image title"/>
							<CardContent className={classes.cardContent}>
								<Typography variant="h5" gutterBottom>
									{props.profile.fullName}
								</Typography>
								<Typography>
									{props.profile.aboutMe}
									<Typography> {props.profile.contacts.facebook} </Typography>
									<Typography>{props.profile.contacts.facebook}</Typography>
									<Typography> {props.profile.contacts.website}</Typography>
									<Typography>{props.profile.contacts.vk}</Typography>
									<Typography>{props.profile.contacts.twitter}</Typography>
									<Typography>{props.profile.contacts.instagram}</Typography>
									<Typography>{props.profile.contacts.youtube}</Typography>
									<Typography>{props.profile.contacts.github}</Typography>
									<Typography>{props.profile.contacts.mainLink}</Typography>
									<Typography>Work:{props.profile.lookingForAJobDescription}</Typography>
								</Typography>
							</CardContent>
							<CardActions>
								<Button variant="outlined" color="primary">
									View
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Box>
			</Container>
		</>
	);
};
export default ProfileInfo;
