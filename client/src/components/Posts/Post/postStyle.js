import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: "90%",
        // backgroundColor:"rgba(0,0,0,0.5",
        // backgroundBlendMode:"darken",
    },
    border: {
        border: "solid"
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        width:"300px",
        position: "relative",
        margin:"5px",



    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: 'white',


    },
    overlay2: {
        position: "absolute",
        top: "20px",
        left: "120px",
        color: 'white',
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px"
    },
    title: {
        padding: "0 16px",

    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",



    },
    date: {
        color: "black",
        marginTop: "5px",
        marginLeft: "-20px",

    },
    creator:{
        marginTop: "-20px",
        marginLeft: "5px",
    }
}))

