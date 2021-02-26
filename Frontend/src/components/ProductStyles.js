import { fade, makeStyles } from "@material-ui/core"

const productStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#002c73",
        position: "fixed",
    },

    addForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%"
    },

    menuButton: {
        marginRight: theme.spacing(2),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.2),
        },
    },

    button: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#006fff",

        "&:hover": {
            backgroundColor: "#1990ff",
            boxShadow: "0px 0px 4px 1px grey"
        }
    },

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    cardActions: {
        justifyContent: "center",
        alignContent: "center"
    },

    cardContent: {
        flexGrow: 1,
    },

    cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(2),
    },

    center: {
        justifyContent: "center"
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(10),
    },

    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inputRoot: {
        color: "inherit",
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },

    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
}))

export default productStyles