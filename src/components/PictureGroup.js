import Picture from "./Picture";
import { useState } from "react";
const PictureGroup = (props) => {
    let { pictures } = props;
    const [data, setData] = useState(pictures)
    const stylePictures = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    };

    const handleDelete = (e) => {
        console.log('delete: ' + e.target.value);
        setData(data => data.filter(item => item.id !== e.target.value));
    }

    return (
        <div style={stylePictures}>
            {pictures.map(pic => (
                <Picture key={pic.id} picture={pic} onDelete={handleDelete.bind(this)} />
            ))}
        </div>
    );
}

export default PictureGroup;