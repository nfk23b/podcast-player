import React from "react";
import App from "next/app";
import Head from "next/head";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../fonts/SFPro.css";

const theme = createMuiTheme({
    palette: {
        header: "#C7E7E2",
        headerBorder: "#F5F5F5",
        textDark: "#154751",
        textAuthor: "#7FB0A9",
        textName: "#04362F",
        textDescription: "#89D8CB",
        playerFilled: "#4F978D",
        emptyLine: "#E9F7F4",
        background: "#E5E5E5",
        headerCount: "#C93B3B",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 960,
            lg: 1200,
            xl: 1440,
        },
    },
    typography: {
        fontFamily: "SFPro",
    },
});

export default class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector("#jss-server-side");

        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <React.StrictMode>
                    <Head>
                        <title>Podcast player</title>
                    </Head>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </React.StrictMode>
            </React.Fragment>
        );
    }
}
