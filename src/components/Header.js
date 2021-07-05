import { NavLink } from 'react-router-dom';
import { createUseStyles } from "react-jss";

const Header = () => {

    const useStyles = createUseStyles((theme) => ({
        Header: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            background: theme.palette.secondary,
            padding: "0 1rem",
            color: "#fff",
        },
        NavLogo: {
            fontFamily: "sans-serif",
            cursor: "pointer",
            fontSize: "2rem",
        },
        NavLinks: {
            display: "flex",
            listStyle: "none",
            padding: "0",
            "& li": {
                padding: "0 1rem 0 0",
                textTransform: "uppercase",
                "& a": {
                    textDecoration: "none",
                    color: "#fff",
                    "&:hover": {
                        borderBottom: "2px solid #fff"
                    }
                }
            }
        },
        IsActive: {
            borderBottom: "2px solid #fff"
        }
    }));
    const classes = useStyles();
    return (
        <header className={classes.Header}>
            <h1 className={classes.NavLogo}>SlapSticker</h1>
            <nav>
                <ul className={classes.NavLinks}>
                    <li>
                        <NavLink exact to="/" activeClassName={classes.IsActive}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/readme" activeClassName={classes.IsActive}>readme</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;