import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";

// import stickers
import slap from "./stickers/slap.png";
import fist from "./stickers/fist.png";
import gun from "./stickers/gun.png";
import knife from "./stickers/knife.png";

import Header from "./components/Header";
import PictureGroup from "./components/PictureGroup";
import Readme from "./components/Readme";

import { Switch, Route, Redirect } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
    fontFamily: theme.palette.fontFamily,
    fontSize: "1.25rem",
  },


  App: {
    padding: "20px",
    background: theme.palette.primary,
    maxWidth: "800px",
    width: "90%",
    margin: "auto",
    "& a": {
      color: theme.palette.text,
    },
  },
  Title: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "700",
    padding: "1rem 0",
    color: theme.palette.textHeading,
    border: theme.palette.border,
    textShadow:" 0px 1px 0px #000",
  },
  Main: {
    border: theme.palette.border,
    padding: "0 1rem"
  },
  Canvas: {
    background: theme.palette.background,
    "& canvas": {
      width: "100%",
      height: "auto",
      cursor: "pointer",
    },
    "& video": {
      display: "none",
    },
  },
  Stickers: {
    "& button": {
      marginRight: "1rem",
      marginBottom: "1rem",
      border: theme.palette.border,
      background: theme.palette.primary,
      cursor: "pointer",

      "&:hover": {
        "& img": {
          transform: "scale(1.1)"
        },
      },
    },
    "& img": {
      height: "4rem",
      transition: "all 0.3s ease",
    },
  },

  Gallery: {
    "& input": {
      border: theme.palette.border,
      padding: "4px 8px",
    },
    "& img": {
      maxHeight: "16rem",
    },
  },

}));


const stickers = [slap, fist, gun, knife].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

function App(props) {
  // css classes from JSS hook
  const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    pictures, // all captured pictures
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        {/** * Main app route */}
        <Route path="/" exact>
          <p className={classes.Title}>
            Have you ever said something so dumb, you just wanted to slap
            yourself? Well now you can!
          </p>
          <main className={classes.Main}>
            <section className={classes.Gallery}>
              <h4>Step one: Give it a name</h4>
              <input
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </section>
            <section className={classes.Stickers}>
              <h4>Step 2: select your sticker...</h4>
              {stickers.map(item => (
                <button key={item.url} onClick={() => setSticker(item)}>
                  <img src={item.url} alt={item} />
                </button>))
              }
            </section>
            <section className={classes.Canvas}>
              <h4>Step three: Slap your self!</h4>
              <video ref={handleVideoRef} />
              <canvas
                ref={handleCanvasRef}
                width={2}
                height={2}
                onClick={sticker && handleCapture}
              />
            </section>
            <section className={classes.Gallery}>
              <h4>Step 4: Cherish this moment forever</h4>
              {pictures.length > 0 && <PictureGroup pictures={pictures} />}
             
            </section>
          </main>
        </Route>
        {/** * Readme route */}
        <Route path="/readme">
          <Readme />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
