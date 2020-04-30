import { makeStyles } from "@material-ui/core/styles";
import imageHelper from "../../utils/images-helper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: "20px 0 23px",
        borderBottom: `1px solid ${theme.palette.emptyLine}`,
        maxWidth: 530,
        margin: "0 auto",
        [theme.breakpoints.up("sm")]: {
            margin: "0",
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: "50%",
        },
    },
    info: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
    },
    image: {
        display: "flex",
        position: "relative",
        cursor: "pointer",
        padding: "5px 0",
        marginRight: 14,

        "& img": {
            objectFit: "contain",
        },

        "&::after": {
            content: "''",
            position: "absolute",
            width: 15,
            height: 17,
            display: "block",
            backgroundImage: `url(${imageHelper("play")})`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
        },
    },
    author: {
        fontSize: "11.2px",
        lineHeight: "13px",
        letterSpacing: "0.186667px",
        color: theme.palette.textAuthor,
        margin: "0 0 3px",
    },
    name: {
        fontSize: "17px",
        lineHeight: "20px",
        color: theme.palette.textName,
        margin: "0 0 7px",
    },
    description: {
        fontSize: "13px",
        lineHeight: "16px",
        color: theme.palette.textDescription,
        margin: "0 0 20px",
    },
    details: {
        display: "flex",
    },
    icon: {
        marginRight: 30,
        color: theme.palette.textAuthor,
        display: "flex",

        "& img": {
            marginRight: 11,
            cursor: "pointer",
        },
    },
    progressWrapper: {
        marginLeft: "30px",
        color: theme.palette.textAuthor,
        width: "100%",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: "50px",
        },
        [theme.breakpoints.up("xl")]: {
            marginLeft: "80px",
        },
    },
    progressBar: {
        width: "100%",
        backgroundColor: theme.palette.emptyLine,
        height: "5px",
        borderRadius: "3px",
        marginTop: "6px",
        maxWidth: "130px",
        marginRight: 15,
    },
    progressBarFill: {
        display: "block",
        height: "5px",
        backgroundColor: theme.palette.playerFilled,
        borderRadius: "3px",
        transition: "width 500ms ease-in-out",
        width: "70%",
    },
    dots: {
        cursor: "pointer",
        position: "absolute",
        right: 0,
        top: 0,
    },
}));

const PodcastItem = ({
    data: { author, name, image, description, likes, plays, link },
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <a href={link} className={classes.image}>
                <img src={imageHelper(image)} />
            </a>
            <div className={classes.info}>
                <p className={classes.author}>{author}</p>
                <p className={classes.name}>{name}</p>
                <p className={classes.description}>{description}</p>
                <div className={classes.details}>
                    <div className={classes.icon}>
                        <img src={imageHelper("heart")} />
                        <span>{likes}</span>
                    </div>
                    <div className={classes.icon}>
                        <img src={imageHelper("headphones")} />
                        <span>{plays}</span>
                    </div>
                    <div className={classes.icon}>
                        <img src={imageHelper("download")} />
                    </div>

                    <div className={classes.progressWrapper}>
                        <div className={classes.progressBar}>
                            <span className={classes.progressBarFill}></span>
                        </div>
                        <span className={classes.progress}>70%</span>
                    </div>
                </div>
                <a className={classes.dots}>
                    <img src={imageHelper("dots")} />
                </a>
            </div>
        </div>
    );
};

export default PodcastItem;
