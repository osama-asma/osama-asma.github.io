import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import asmaosama from "./kitabImages/asmaosama.webp";
import asmaosama1 from "./kitabImages/asmaosama1.webp";
import asmaosama2 from "./kitabImages/asmaosama2.webp";
import asmaosama3 from "./kitabImages/asmaosama3.webp";
import asmaosama4 from "./kitabImages/asmaosama4.webp";
import asmaosama5 from "./kitabImages/asmaosama5.webp";
import asmaosama6 from "./kitabImages/asmaosama6.webp";
import asmaosama7 from "./kitabImages/asmaosama7.webp";
import asmaosama8 from "./kitabImages/asmaosama8.webp";
import asmaosama9 from "./kitabImages/asmaosama9.webp";
import asmaosama10 from "./kitabImages/asmaosama10.webp";
import asmaosama11 from "./kitabImages/asmaosama11.webp";
import asmaosama12 from "./kitabImages/asmaosama12.webp";
import asmaosama13 from "./kitabImages/asmaosama13.webp";
import asmaosama14 from "./kitabImages/asmaosama14.webp";
import asmaosama15 from "./kitabImages/asmaosama15.webp";
import asmaosama16 from "./kitabImages/asmaosama16.webp";
import asmaosama17 from "./kitabImages/asmaosama17.webp";
import asmaosama18 from "./kitabImages/asmaosama18.webp";
import asmaosama19 from "./kitabImages/asmaosama19.webp";
import asmaosama20 from "./kitabImages/asmaosama20.webp";
import asmaosama21 from "./kitabImages/asmaosama21.webp";
import asmaosama22 from "./kitabImages/asmaosama22.webp";
import asmaosama23 from "./kitabImages/asmaosama23.webp";
import asmaosama24 from "./kitabImages/asmaosama24.webp";
import asmaosama25 from "./kitabImages/asmaosama25.webp";
import asmaosama26 from "./kitabImages/asmaosama26.webp";
import PhotoGallery from "./PhotoGallery";
import useScreenWidth from "./useScreenWidth";

// Add imports for left and right arrow icons
import flower from './flower2.svg';

const Katib = () => {
    const width = useScreenWidth();
    const photos = [
        asmaosama9,
        asmaosama2,
        asmaosama18,
        asmaosama4,
        asmaosama19,
        asmaosama5,
        asmaosama6,
        asmaosama25,
        asmaosama8,
        asmaosama10,
        asmaosama15,
        asmaosama11,
        asmaosama12,
        asmaosama1,
        asmaosama13,
        asmaosama24,
        asmaosama14,
        asmaosama16,
        asmaosama23,
        asmaosama17,
        asmaosama20,
        asmaosama7,
        asmaosama21,
        asmaosama,
        asmaosama22,
        asmaosama3,
        asmaosama26,
    ];
    const iconSize = width > 992 ? '100px' : '0px'; // Adjust the size based on screen width

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                background: "#fff",
                padding: width > 576 ? "60px" : "30px",
            }}
        >
            <div style={{ fontSize: width > 576 ? '24px' : '18px', color: "#E64C3C" }}>
                Slide Show
            </div>

            <img
                src={flower}
                alt="Left Arrow"
                style={{ position: 'absolute', left: '20px', top: '50%', cursor: 'pointer' }}
                width={iconSize}
                height={iconSize}
            />

            <PhotoCarousel photos={photos} />

            <img
                src={flower}
                alt="Right Arrow"
                style={{ position: 'absolute', right: '20px', top: '50%', cursor: 'pointer' }}
                width={iconSize}
                height={iconSize}
            />

            <div
                style={{
                    width: "100%",
                    borderTop: "1px solid #DFB16B",
                    marginTop: "48px",
                    marginBottom: "48px",
                }}
            ></div>
            <div style={{ fontSize: "24px", marginBottom: "48px", color: "#E64C3C" }}>
                Gallery
            </div>
            <PhotoGallery images={photos} />
        </div>
    );
};

export default Katib;
