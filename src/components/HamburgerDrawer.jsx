import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import {
	createMuiTheme,
	ThemeProvider,
	useMediaQuery,
} from "@material-ui/core";
import categories from "../data/category";

const useStyles = makeStyles({
	list: {
		width: 200,
		paddingLeft: 10,
		paddingRight: 7,
	},
	fullList: {
		width: "auto",
	},
});

export default function HamburgerDrawer({ setCategory, setLoadMore }) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				<ListItem>Categories</ListItem>
			</List>
			<Divider />
			<List>
				{categories.map((text, index) => (
					<ListItem
						style={{
							height: 40,
							borderRadius: 5,
							textTransform: "capitalize",
						}}
						button
						key={text}
						onClick={() => {
							setLoadMore(20);
							setCategory(text);
						}}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<React.Fragment>
				<Button onClick={toggleDrawer("left", true)}>
					<MenuIcon />
				</Button>
				<ThemeProvider theme={theme}>
					<SwipeableDrawer
						anchor={"left"}
						open={state["left"]}
						onClose={toggleDrawer("left", false)}
						onOpen={toggleDrawer("left", true)}>
						{list("left")}
					</SwipeableDrawer>
				</ThemeProvider>
			</React.Fragment>
		</div>
	);
}
