import Picture from "./Picture";

const PictureGroup = (props) => {
    let { pictures } = props;
    const stylePictures = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    };

    return (
        <div style={stylePictures}>
            {pictures.map(pic => (
                <Picture key={pic.id} picture={pic} onDelete={props.handleDelete} />
            ))}
        </div>
    );
}

export default PictureGroup;