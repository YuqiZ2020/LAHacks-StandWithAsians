import React, { useState } from 'react';
import { db, auth, storage } from "../firebase";

import "./Gallery.css"

const FirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [toggle, setToggle] = useState(false);
    const types = ["image/png", "image/jpeg"];
    const handleChange = e => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setImage(selected);
        } else {
            setImage(null);
        }
    }
    const handleUpload = () => {
        setToggle(true);
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        db.collection("gallery").add({
                            url: url
                        })
                            .then((docRef) => {
                                console.log("Document written with ID: ", docRef.id);
                            })
                            .catch((error) => {
                                console.error("Error adding document: ", error);
                            });
                    });
            }
        )
    };
    console.log("img", image);

    return (
        <div>
            <p className="file-chosen">Share images that represent your culture!</p>
            <br />
            <label className='labelGallery'>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            { image ? (
                <div>
                    <span className="file-chosen">{image.name}</span>
                    <button className="upload" onClick={handleUpload}> OK </button>
                </div>
            ) : <span className="file-chosen">Please select a jpeg or png file</span>}
            { (toggle && progress < 100) ? (
                <progress className="progress-bar" value={progress} max="100" />
            ) : null}
            <br />

        </div>
    )
};

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        }
    }
    componentDidMount() {
        db.collection('gallery')
            .get()
            .then(snapshot => {
                const urls = []
                snapshot.forEach(doc => {
                    const data = doc.data();
                    urls.push(data);
                })
                this.setState({ urls: urls })
                console.log(this.state.urls)
            })
            .catch(error => console.log(error))
    };

    renderImgs = (source) => {
        return source.map((url, index) => {
            console.log(url);
            return (
                <div key={index} className="column">
                    <img className="image-grid" src={url.url} />
                </div>
            )
        })
    };

    render() {
        return (
            <div className="gallery">
                <FirebaseFileUpload />
                <div className="image-wrap">
                    <div className="image-wrap">
                        {this.renderImgs(this.state.urls)}
                    </div>

                </div>
            </div>

        )
    }
}