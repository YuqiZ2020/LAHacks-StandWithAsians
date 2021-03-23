import React, { useState } from 'react';
import { db, auth, storage } from "../firebase";

import "./Gallery.css"

const FirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const types = ["image/png", "image/jpeg"];
    const handleChange = e => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setImage(selected);
        } else {
            setImage(null);
            alert("Please select a jpeg or png file!");
        }
    }
    const handleUpload = () => {
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
            <p>Upload Image that represents your culture!</p>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}> Upload </button>
            <progress value={progress} max="100"/>
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
        return source.map((url) => {
            console.log(url);
            return <img src={url.url} />
        })
    };

    render() {
        return (
            <div className="gallery">
                <div className="img">
                    <p>xxx some image</p>
                    {this.renderImgs(this.state.urls)}
                </div>
                <FirebaseFileUpload />
            </div>

        )
    }
}