import { createUseStyles } from "react-jss";

const Picture = (props) => {
    const useStyles = createUseStyles((theme) => ({
        Picture: {
            background: theme.palette.secondary,
            padding: 4,
            maxWidth: "28rem",
            position: "relative",
            display: "inline-block",
            margin: "1rem 0",
            "& h3": {
                color: "#fff",
                textAlign: "center",
            },
            "& img": {
                maxWidth: "100%",
            },
        },
        ButtonsGroup: {
            display: "flex",
            justifyContent: "center",

            "& button": {
                background: theme.palette.secondary,
                border: "2px solid #fff",
                cursor: "pointer",
                padding: "6px",
                margin: "1rem",
                minWidth: "6rem",
                transition: "background 0.3s ease",
                "&:hover": {
                    background: "#fff",
                    "& a": {
                        color: theme.palette.secondary
                    }
                },
                "& a": {
                    textDecoration: "none",
                    color: "#fff"
                }
            }
        }
    }))
    const { picture } = props;
    const classes = useStyles(props);

    return (
        <div className={classes.Picture}>
            <img src={picture.dataUri} alt={picture.dataUri} />
            <h3>{picture.title}</h3>
            <div className={classes.ButtonsGroup}>
                <button> <a href="/" download={picture.title + ".png"}>Download</a></button>
                <button><a href="https://twitter.com/compose/tweet" target="_blank" rel="noreferrer">Twitter</a></button>
            </div>
        </div>
    );
}

export default Picture;