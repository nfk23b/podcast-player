import refresh from "../images/refresh.svg";
import discover from "../images/mic.svg";
import notifications from "../images/headphones2.svg";
import username from "../images/username.jpg";
import joe from "../images/joe.png";
import mfm from "../images/mfm.jpg";
import heart from "../images/heart.svg";
import headphones from "../images/headphones.svg";
import downloads from "../images/downloads.svg";
import download from "../images/download.svg";
import play from "../images/play.svg";
import dots from "../images/dots.svg";

const imageHelper = (img) => {
    switch (img) {
        case "refresh":
            return refresh;
        case "discover":
            return discover;
        case "notifications":
            return notifications;
        case "username":
            return username;
        case "joe":
            return joe;
        case "mfm":
            return mfm;
        case "heart":
            return heart;
        case "headphones":
            return headphones;
        case "download":
            return download;
        case "downloads":
            return downloads;
        case "play":
            return play;
        case "dots":
            return dots;

        default:
            return false;
    }
};

export default imageHelper;
