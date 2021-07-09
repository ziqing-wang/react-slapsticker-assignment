import { createUseStyles } from "react-jss";
import './deleteBtn.css';

const Picture = (props) => {
    const useStyles = createUseStyles((theme) => ({
        Picture: {
            background: theme.palette.secondary,
            padding: 4,
            maxWidth: "22rem",
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
        DeleteBtn: {
            position: "absolute",
            right: 0,
            margin: "0.5rem 1rem",
            width: "2rem",
            height: "2rem",
            background: theme.palette.secondary,
            border: "none",
            outline: "none",
            borderRadius: "50%",
            cursor: "pointer",
            color: "#fff",
            boxShadow: `1px 4px 1px ${theme.palette.textHeading}`,
            "&:hover": {
                background: theme.palette.textHeading,
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

    const deletePictureHandler = () => {
        props.onDelete(picture.id)
    }

    return (
        <div className={classes.Picture}>
            <button className={classes.DeleteBtn} onClick={deletePictureHandler}>X</button>
            <img src={picture.dataUri} alt={picture.dataUri} />
            <h3>{picture.title}</h3>
            <div className={classes.ButtonsGroup}>
                <button> <a href={picture.dataUri} download={picture.title}>Download</a></button>
                <button><a href="https://twitter.com/compose/tweet" target="_blank" rel="noreferrer">Twitter</a></button>
            </div>
        </div>
    );
}

export default Picture;