import { makeStyles } from "@material-ui/core/styles";
import PodcastItem from "../podcast-item/podcast-item";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
}));

const PodcastList = () => {
    const classes = useStyles();
    const mockData = [
        {
            id: 1,
            author: "JoeRogan",
            name: "JRE MMA Show #75 with Dan Hardy",
            image: "joe",
            description:
                "Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy.",
            likes: 84,
            plays: 96,
            link: "google.com",
        },
        {
            id: 2,
            author: "myfavoritemurder",
            name: "MFM Minisode 13",
            image: "mfm",
            description:
                "This week's hometowns include serial killer connections and an acid trip discovery.",
            likes: 43,
            plays: 87,
            link: "yahoo.com",
        },
        {
            id: 3,
            author: "JoeRogan",
            name: "JRE MMA Show #75 with Dan Hardy",
            image: "joe",
            description:
                "Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy.",
            likes: 84,
            plays: 96,
            link: "amazon.com",
        },
    ];

    return (
        <div className={classes.root}>
            {mockData.map((item) => (
                <PodcastItem key={item.id} data={item} />
            ))}
        </div>
    );
};

export default PodcastList;
