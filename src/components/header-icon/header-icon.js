import { makeStyles } from "@material-ui/core/styles";
import imageHelper from "../../utils/images-helper";

const useStyles = makeStyles((theme) => ({
    icon: {
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        "& img": {
            objectFit: "contain",
            height: 34,
        },
        "& span": {
            marginTop: 3,
        },
    },
}));

const HeaderIcon = ({ img }) => {
    const classes = useStyles();

    return (
        <div className={classes.icon}>
            <img src={imageHelper(img)} />
            <span>{img}</span>
        </div>
    );
};

export default HeaderIcon;
