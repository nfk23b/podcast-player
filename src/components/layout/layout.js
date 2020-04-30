import Header from "./header/header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    layoutStyle: {
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    wrapper: {
        display: "flex",
        flexGrow: 1,
        marginLeft: "calc(100vw - 100%)",
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: theme.palette.background,
            display: "flex",
        },
    },
}));

export default function Layout(props) {
    const classes = useStyles();

    return (
        <div className={classes.layoutStyle}>
            <Header />
            <div className={classes.wrapper}>{props.children}</div>
        </div>
    );
}
