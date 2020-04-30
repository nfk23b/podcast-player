import React, { useState, useEffect } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import HeaderIcon from "../../header-icon/header-icon";
import Router from "next/router";
import { Typography } from "@material-ui/core";
import imageHelper from "../../../utils/images-helper";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
        marginLeft: "calc(100vw - 100%)",
        height: 53,
        borderBottom: `1px solid ${theme.palette.headerBorder}`,
        [theme.breakpoints.up("sm")]: {
            height: 84,
            backgroundColor: theme.palette.header,
            borderBottom: 0,
        },
    },
    inner: {
        height: "100%",
        margin: "0 auto",
        padding: "0 20px 0",
        display: "none",

        [theme.breakpoints.up("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1440px",
            padding: "0 60px 0",
        },
        [theme.breakpoints.up("xl")]: {
            padding: "0 151px 0 142px",
            maxWidth: "1440px",
        },
    },
    link: {
        outline: "none",
        textDecoration: "none",
        color: theme.palette.textDark,
        fontSize: "14.5714px",
        lineHeight: "18px",
        fontFamily: "Montserrat",
    },
    img: {
        display: "block",
        width: "100%",
    },
    icons: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
    },
    mobile: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: "100%",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    downloads: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        fontSize: "14.923px",
        lineHeight: "18px",
    },
    downloadsIcon: {
        position: "absolute",
        top: "50%",
        right: 20,
        transform: "translate(0, -50%)",
        cursor: "pointer",
    },
    downloadsCount: {
        fontSize: "7.99549px",
        lineHeight: "10px",
        color: theme.palette.common.white,
        backgroundColor: theme.palette.headerCount,
        padding: "3px",
        borderRadius: "100%",
    },
}));

export default function Header() {
    const classes = useStyles();
    const images = ["refresh", "discover", "notifications", "username"];
    const [currentPage, setCurrentPage] = useState("/");

    useEffect(() => {
        Router.router.route !== "/"
            ? setCurrentPage(Router.router.route)
            : null;
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.inner}>
                <Link
                    href={currentPage === "/" ? "/inner-page" : "/"}
                    as={currentPage === "/" ? "/inner-page" : "/"}
                >
                    <a className={classes.link}>jifcast</a>
                </Link>
                <div className={classes.icons}>
                    {images.map((img) => (
                        <HeaderIcon img={img} key={img} />
                    ))}
                </div>
            </div>
            <div className={classes.mobile}>
                <Typography className={classes.downloads}>Downloads</Typography>
                <div className={classes.downloadsIcon}>
                    <img src={imageHelper("downloads")} />
                    <span className={classes.downloadsCount}>16</span>
                </div>
            </div>
        </div>
    );
}
