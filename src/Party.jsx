import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import PhotoGallery from './PhotoGallery';
import useScreenWidth from './useScreenWidth';
import asmaosama27 from "./kitabImages/asmaosama27.webp";
import asmaosama28 from "./kitabImages/asmaosama28.webp";
import asmaosama29 from "./kitabImages/asmaosama29.webp";
import asmaosama30 from "./kitabImages/asmaosama30.webp";
import asmaosama31 from "./kitabImages/asmaosama31.webp";
import asmaosama33 from "./kitabImages/asmaosama33.webp";
import asmaosama34 from "./kitabImages/asmaosama34.webp";
import asmaosama35 from "./kitabImages/asmaosama35.webp";
import asmaosama36 from "./kitabImages/asmaosama36.webp";
import asmaosama37 from "./kitabImages/asmaosama37.webp";
import asmaosama38 from "./kitabImages/asmaosama38.webp";
import asmaosama39 from "./kitabImages/asmaosama39.webp";
import asmaosama40 from "./kitabImages/asmaosama40.webp";
import asmaosama41 from "./kitabImages/asmaosama41.webp";
import asmaosama42 from "./kitabImages/asmaosama42.webp";
import asmaosama43 from "./kitabImages/asmaosama43.webp";
import asmaosama44 from "./kitabImages/asmaosama44.webp";
import asmaosama45 from "./kitabImages/asmaosama45.webp";
import asmaosama46 from "./kitabImages/asmaosama46.webp";
import asmaosama47 from "./kitabImages/asmaosama47.webp";
import asmaosama48 from "./kitabImages/asmaosama48.webp";
import asmaosama49 from "./kitabImages/asmaosama49.webp";
import asmaosama50 from "./kitabImages/asmaosama50.webp";
import asmaosama51 from "./kitabImages/asmaosama51.webp";
import asmaosama52 from "./kitabImages/asmaosama52.webp";
import asmaosama53 from "./kitabImages/asmaosama53.webp";
import asmaosama54 from "./kitabImages/asmaosama54.webp";
import asmaosama55 from "./kitabImages/asmaosama55.webp";

// Add imports for left and right arrow icons
import flower from './flower1.svg';

const Party = () => {
    const width = useScreenWidth();
    const photos = [
        asmaosama27,
        asmaosama28,
        asmaosama29,
        asmaosama30,
        asmaosama31,
        asmaosama33,
        asmaosama34,
        asmaosama35,
        asmaosama36,
        asmaosama37,
        asmaosama38,
        asmaosama39,
        asmaosama40,
        asmaosama41,
        asmaosama42,
        asmaosama43,
        asmaosama44,
        asmaosama45,
        asmaosama46,
        asmaosama47,
        asmaosama48,
        asmaosama49,
        asmaosama50,
        asmaosama51,
        asmaosama52,
        asmaosama53,
        asmaosama54,
        asmaosama55
    ];

    const iconSize = width > 992 ? '100px' : '0px'; // Adjust the size based on screen width

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#fff',
            padding: width > 576 ? '60px' : '20px',
        }}>
            <div style={{ fontSize: width > 576 ? '24px' : '18px', color: '#e0b8a6' }}>Slide Show</div>

            {/* Left arrow icon */}
            <img
                src={flower}
                alt="Left Arrow"
                style={{ position: 'absolute', left: '20px', top: '50%', cursor: 'pointer' }}
                width={iconSize}
                height={iconSize}
            />

            <PhotoCarousel photos={photos} />

            {/* Right arrow icon */}
            <img
                src={flower}
                alt="Right Arrow"
                style={{ position: 'absolute', right: '20px', top: '50%', cursor: 'pointer' }}
                width={iconSize}
                height={iconSize}
            />

            <div style={{ width: '100%', borderTop: '1px solid #DFB16B', marginTop: '48px', marginBottom: '48px' }}></div>

            <div style={{ fontSize: width > 576 ? '24px' : '18px', marginBottom: '24px', color: '#e0b8a6' }}>Gallery</div>
            <PhotoGallery images={photos} />
        </div>
    );
};

export default Party;
