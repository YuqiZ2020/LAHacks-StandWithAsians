import React, { useState } from 'react';
import { db, auth, storage } from "../firebase";

import "./Gallery.css"

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all_data: []
        }
    }

    componentDidMount() {
        db.collection('gallery')
            .get()
            .then(snapshot => {
                const all_data = []
                snapshot.forEach(doc => {
                    const data = doc.data();
                    data.docid = doc.id;
                    all_data.push(data);
                })
                this.setState({ all_data:all_data })
            })
            .catch(error => console.log(error))
    };

    renderImgReview = (source) => {

        function createButton(review_status, img_data) {

            function changeReviewStatus(data) {
                console.log(data.review)
                data.review = !data.review;
                const curid = data.docid;
                delete data.docid;
                db.collection("gallery").doc(curid).update(data);
                console.log("after:", data);
            }

            let button;
            if (review_status) {
                button = <button onClick={() => changeReviewStatus(img_data)}>Withdraw</button>;
            } else {
                button = <button onClick={() => changeReviewStatus(img_data)}>Approve</button>;
            }
            return button;
        }

        return source.map((img_data, index) => {
            return (
                <div key={index} className="column">
                    <img className="image-grid" src={img_data.url} />
                    {createButton(img_data.review, img_data)}
                </div>
            )
        })
    };

    render() {
        return (
            <div className="gallery">
                <div className="image-wrap">
                    <div className="image-wrap">
                        {this.renderImgReview(this.state.all_data)}
                    </div>

                </div>
            </div>

        )
    }
}