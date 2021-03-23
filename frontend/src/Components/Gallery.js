import React from 'react';
import "./Gallery.css"

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                <p>Upload pictures that represent your Asian culture!</p>
                {/* PictureList component containing PictureBox components */}
                <input type="file" />
            </div>
        )
    }
}