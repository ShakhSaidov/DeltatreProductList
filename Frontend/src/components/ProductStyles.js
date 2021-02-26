import { makeStyles } from "@material-ui/core"

const productStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },

    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardActions: {
        justifyContent: "center"
    },
    cardContent: {
        flexGrow: 1,
    },

    button: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#006aff"
    }
}))

export default productStyles