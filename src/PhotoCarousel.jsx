import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const CarouselContainer = styled.div`
overflow: hidden;
position: relative;
max-width: 700px;
margin: 0 auto;
`;

const SlideContainer = styled.div`
display: flex;
transition: transform 0.5s ease-in-out;
align-items: center;
`;

const Slide = styled.div`
flex: 0 0 100%;
height: auto;
border-radius: 10px;
overflow: hidden;
`;

const Image = styled.img`
width: 100%;
height: auto;
border-radius: 10px;
cursor: pointer;
`;

const ModalContent = styled.div`
position: relative;
width: 100%;
max-width: 700px;
max-height: 80%;
border-radius: 10px;
overflow: hidden;

@media (max-width: 992px) {
  max-width: 400px;
}
@media (max-width: 500px) {
  max-width: 300px;
}
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
display: flex;
justify-content: space-between;
width: 100%;
padding: 0 20px;
transform: translateY(-50%);
`;
const CustomCarousel = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const location = useLocation();
  const partyPage = location.pathname === '/party';

  const Arrow = styled.div`
    position: absolute;
    top: 50%;
    font-size: 24px;
    color: ${partyPage ? '#f4d1c5' : '#DFB16B'};
    background-color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right: 10px;')}

    opacity: 0.8; /* Set the desired opacity for the arrow components */

    &:hover {
      color: white; /* Change color on hover */
      background-color: ${partyPage ? '#f4d1c5' : '#DFB16B'}; /* Change background color on hover */
      opacity: 1; /* Remove transparency on hover */
    }

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 8px;
  }

    &::before {
      content: '${({ direction }) => (direction === 'left' ? '\\2190' : '\\2192')}';
      font-family: 'Arial', sans-serif;
      font-weight: bold;
    }
  `;

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

  const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: ${partyPage ? '#f4d1c5' : '#DFB16B'};
    background-color: white;
    border: 2px solid #fff; /* White border */
    border-radius: 20px; /* Adjust the border-radius to make it a horizontal oval */
    padding: 8px 12px; /* Adjust padding for a horizontal oval shape */
    cursor: pointer;
    z-index: 3; /* Ensure the close button appears above the image */

    transition: background-color 0.3s ease, border-color 0.3s ease;
    opacity: 0.8; /* Set the desired opacity for the arrow components */

    &:hover {
      color: white; /* Change color on hover */
      background-color: ${partyPage ? '#f4d1c5' : '#DFB16B'}; /* Change background color on hover */
    opacity: 1; /* Remove transparency on hover */
    }
    @media (max-width: 768px) {
      font-size: 16px;
      padding: 8px 10px;
  }
  `;

  const ArrowModal = styled.div`
  font-size: 24px;
  color: ${partyPage ? '#f4d1c5' : '#DFB16B'};
  background-color: white;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 3;

  transition: background-color 0.3s ease, border-color 0.3s ease;
  opacity: 0.8; /* Set the desired opacity for the arrow components */

  &:hover {
    color: white; /* Change color on hover */
      background-color: ${partyPage ? '#f4d1c5' : '#DFB16B'}; /* Change background color on hover */
    opacity: 1; /* Remove transparency on hover */

  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px;
}
`;

  const nextSlideCarousel = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
  }, [photos]);

  const prevSlideCarousel = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + photos.length) % photos.length);
  }, [photos]);

  const nextSlideModal = useCallback(() => {
    const newIndex = (selectedImageIndex + 1) % photos.length;
    setSelectedImageIndex(newIndex);
  }, [selectedImageIndex, photos]);

  const prevSlideModal = useCallback(() => {
    const newIndex = (selectedImageIndex - 1 + photos.length) % photos.length;
    setSelectedImageIndex(newIndex);
  }, [selectedImageIndex, photos]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlideCarousel();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [nextSlideCarousel, photos.length]);

  return (
    <>
      <CarouselContainer>
        <Arrow direction="left" onClick={prevSlideCarousel}></Arrow>
        <SlideContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {photos.map((photo, index) => (
            <Slide key={index} onClick={() => openModal(index)}>
              <Image src={photo} alt={`Photo ${index + 1}`} />
            </Slide>
          ))}
        </SlideContainer>
        <Arrow direction="right" onClick={nextSlideCarousel}></Arrow>
      </CarouselContainer>

      <ModalContainer showModal={showModal} onClick={closeModal}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <ModalImage src={photos[selectedImageIndex]} alt={`Selected Photo`} />
          <NavigationArrows>

            <ArrowModal
              onClick={(e) => {
                e.stopPropagation();
                prevSlideModal();
              }}
            >
              &lt;
            </ArrowModal>
            <ArrowModal
              onClick={(e) => {
                e.stopPropagation();
                nextSlideModal();
              }}
            >
              &gt;
            </ArrowModal>

          </NavigationArrows>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default CustomCarousel;
