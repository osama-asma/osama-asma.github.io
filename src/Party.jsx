import React from 'react'
import PhotoCarousel from './PhotoCarousel'
// import imagePath from './asmaosama.webp';
// import imagePath1 from './asmaosama1.jpg';
import PhotoGallery from './PhotoGallery';
import useScreenWidth from './useScreenWidth';

const Party = () => {
    const width = useScreenWidth()

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#fff',
            padding: width > 576 ? '60px' : '30px'
        }}>
            <div style={{ fontSize: '24px', marginBottom: '24px', color: '#e0b8a6' }}>Slide Show</div>
            {/* <PhotoCarousel photos={[imagePath, imagePath1]} /> */}
            <div style={{ width: '100%', borderTop: '1px solid #e0b8a6', marginTop: '48px', marginBottom: '48px' }}></div>
            <div style={{ fontSize: '24px', marginBottom: '24px', color: '#e0b8a6' }}>Gallery</div>
            {/* <PhotoGallery images={[imagePath, imagePath1]} /> */}

        </div>
    )
}

export default Party