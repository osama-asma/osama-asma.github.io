// PhotoGallery.jsx

import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ images }) => {
    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} alt={`Photo ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery;
