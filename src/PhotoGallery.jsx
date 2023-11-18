import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


const PartyGalleryContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
align-items: center;
background: rgba(224, 184, 166, 0.5);
padding: 24px;
border-radius: 4px;
@media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;
const KatibGalleryContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
align-items: center;
background: rgba(230, 76, 60, 0.5);
padding: 24px;
border-radius: 4px;
@media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;
const PartyGalleryImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
box-shadow: 0 16px 16px rgba(223, 177, 107, 0.5);
`;
const KatibGalleryImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
box-shadow: 0 16px 16px rgba(255, 255, 255, 0.5);

`;

const PartyCloseButton = styled.div`
position: absolute;
top: 10px;
right: 10px;
font-size: 24px;
color: #f4d1c5;
background-color: white;
border: 2px solid #fff;
border-radius: 20px;
padding: 8px 12px;
cursor: pointer;
z-index: 3;

transition: background-color 0.3s ease, border-color 0.3s ease;
opacity: 0.8; /* Set the desired opacity for the arrow components */;

&:hover {
  color: white; /* Change color on hover */
  background-color: #f4d1c5; /* Change background color on hover */
opacity: 1; /* Remove transparency on hover */
}
@media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 10px;
}
`;
const KatibCloseButton = styled.div`
position: absolute;
top: 10px;
right: 10px;
font-size: 24px;
color: #E64C3C;
background-color: white;
border: 2px solid #fff;
border-radius: 20px;
padding: 8px 12px;
cursor: pointer;
z-index: 3;

transition: background-color 0.3s ease, border-color 0.3s ease;
opacity: 0.8; /* Set the desired opacity for the arrow components */;

&:hover {
  color: white; /* Change color on hover */
  background-color: #E64C3C; /* Change background color on hover */
opacity: 1; /* Remove transparency on hover */
}
@media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 10px;
}
`;

const PartyArrow = styled.div`
font-size: 24px;
color: #f4d1c5;
background-color: white;
border: 2px solid #fff;
border-radius: 20px;
padding: 8px 12px;
cursor: pointer;
z-index: 3;
margin: 0 10px; /* Add margin to create space around the arrows */

transition: background-color 0.3s ease, border-color 0.3s ease;
opacity: 0.8; /* Set the desired opacity for the arrow components */

&:hover {
color: white; /* Change color on hover */
  background-color: '#f4d1c5'; /* Change background color on hover */
opacity: 1; /* Remove transparency on hover */

}
@media (max-width: 768px) {
    font-size: 20px;
    padding: 8px;
}
`;
const KatibArrow = styled.div`
font-size: 24px;
color: #E64C3C;
background-color: white;
border: 2px solid #fff;
border-radius: 20px;
padding: 8px 12px;
cursor: pointer;
z-index: 3;
margin: 0 10px; /* Add margin to create space around the arrows */

transition: background-color 0.3s ease, border-color 0.3s ease;
opacity: 0.8; /* Set the desired opacity for the arrow components */

&:hover {
color: white; /* Change color on hover */
  background-color: #E64C3C; /* Change background color on hover */
opacity: 1; /* Remove transparency on hover */

}
@media (max-width: 768px) {
    font-size: 20px;
    padding: 8px;
}
`;




const GalleryItem = styled.div`
width: 100%;
height: auto;
border-radius: 10px;
overflow: hidden;
cursor: pointer;
transition: transform 0.3s ease-in-out;
:hover {
transform: scale(1.1);
}
`;

const ModalContent = styled.div`
position: relative;
width: 100%;
max-width: 700px;
max-height: 80%;
border-radius: 10px;
overflow: hidden;
`;
const ModalImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
`;

const NavigationArrows = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
display: flex;
justify-content: space-between;
width: 100%;
`;

const PhotoGallery = ({ images }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const location = useLocation();
    const partyPage = location.pathname === '/party';

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setShowModal(false);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const ModalContainer = styled.div`
    display: ${({ showModal }) => (showModal ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    align-items: center;
    justify-content: center;
    z-index: 2;
  `;

    return (
        <>
            {partyPage ? <PartyGalleryContainer>
                {images.map((image, index) => (
                    <GalleryItem key={index} onClick={() => openModal(index)}>
                        <PartyGalleryImage src={image} alt={`Photo ${index + 1}`} />
                    </GalleryItem>
                ))}
            </PartyGalleryContainer> :
                <KatibGalleryContainer>
                    {images.map((image, index) => (
                        <GalleryItem key={index} onClick={() => openModal(index)}>
                            <KatibGalleryImage src={image} alt={`Photo ${index + 1}`} />
                        </GalleryItem>
                    ))}
                </KatibGalleryContainer>


            }


            <ModalContainer showModal={showModal} onClick={closeModal}>
                <ModalContent>
                    {partyPage ? <PartyCloseButton onClick={closeModal}>&times;</PartyCloseButton>
                        : <KatibCloseButton onClick={closeModal}>&times;</KatibCloseButton>
                    }
                    <ModalImage src={images[selectedImageIndex]} alt={`Selected Photo`} />
                    <NavigationArrows>
                        {partyPage ? <>
                            <PartyArrow
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                            >
                                &lt;
                            </PartyArrow>
                            <PartyArrow
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                            >
                                &gt;
                            </PartyArrow>
                        </> : <>
                            <KatibArrow
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                            >
                                &lt;
                            </KatibArrow>
                            <KatibArrow
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                            >
                                &gt;
                            </KatibArrow>
                        </>}

                    </NavigationArrows>
                </ModalContent>
            </ModalContainer>
        </>
    );
};

export default PhotoGallery;
