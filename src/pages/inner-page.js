import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout/layout.js";
import { Container, Box, Typography } from "@material-ui/core";
import PodcastList from "../components/podcast-list/podcast-list";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: 0,
        margin: "0 auto",
        padding: "0 20px 0",
        [theme.breakpoints.up("sm")]: {
            padding: "0 60px 0",
        },
        [theme.breakpoints.up("md")]: {},
        [theme.breakpoints.up("xl")]: {
            padding: "0 151px 0 142px",
            maxWidth: "1440px",
        },
    },
    heading: {
        fontSize: 29,
        lineHeight: "35px",
        margin: "33px 0 33px",
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.root}>
                <Typography variant="h2" className={classes.heading}>
                    This is page 2
                </Typography>
                <Typography className={classes.description}>
                    This is page 2 description. This is page 2 description. This
                    is page 2 description. This is page 2 description. This is
                    page 2 description. This is page 2 description. This is page
                    2 description. This is page 2 description. This is page 2
                    description. This is page 2 description. This is page 2
                    description. This is page 2 description. This is page 2
                    description. This is page 2 description. This is page 2
                    description. This is page 2 description. This is page 2
                    description. This is page 2 description. This is page 2
                    description.
                </Typography>
            </Container>
        </Layout>
    );
};

export default Home;
