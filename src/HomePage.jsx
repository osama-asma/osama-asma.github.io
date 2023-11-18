import React, { useState } from 'react';
import styled from 'styled-components';
import imagePath from './kitabImages/asmaosama.webp';
import heart from './heart.svg';
import { Link } from 'react-router-dom';
import { ButtonContainer, StyledButtonLink } from './components';
import mabrook from './mabrook.mp3'
import loo from './loo.mp3'
import SoundWave from './SoundWave';

const Subtitle = styled.p`
font-size: 1.5rem;
margin-bottom: 30px;

@media (max-width: 768px) {
  font-size: 1rem;
}
`;

const LandingPageContainer = styled.div`
height: 100vh;
position: relative;
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const Overlay = styled.div`
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1; /* Place the background image behind the content */
background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
`;

const LandingPage = () => {
  const [audio1] = useState(new Audio(loo));
  const [audio2] = useState(new Audio(mabrook));
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeAudio, setActiveAudio] = useState(null);

  const BackgroundImage = styled.div`
  background: url(${imagePath}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place the background image behind the content */
`;

  const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-size: cover;
  }

  &::before {
    background-image: url(${heart});
    top: -20px;
    left: -60px;
  }

  &::after {
    background-image: url(${heart});
    top: -20px;
    right: -60px;
    transform: scaleX(-1); /* To flip the heart horizontally */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


  const StopButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${activeAudio === 'audio1' ? '#e0b8a6' : '#e64c3c'}; /* Stop sign color */
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 24px;

  &:hover {
    background-color: ${activeAudio === 'audio1' ? '#e0b8a6' : '#c0392b'}; /* Darker color on hover */
  }
`;

  const playAudio1 = () => {
    if (isAudioPlaying && activeAudio === "audio2") {
      audio2.pause();
      audio2.currentTime = 0;
    }

    audio1.play();
    setIsAudioPlaying(true);
    setActiveAudio("audio1");

    audio1.addEventListener("ended", () => {
      setIsAudioPlaying(false);
      setActiveAudio(null);
    });
  };

  const playAudio2 = () => {
    if (isAudioPlaying && activeAudio === "audio1") {
      audio1.pause();
      audio1.currentTime = 0;
    }

    audio2.play();
    setIsAudioPlaying(true);
    setActiveAudio("audio2");

    audio2.addEventListener("ended", () => {
      setIsAudioPlaying(false);
      setActiveAudio(null);
    });
  };

  const stopAudio = () => {
    if (activeAudio === "audio1") {
      audio1.pause();
      audio1.currentTime = 0;
    } else if (activeAudio === "audio2") {
      audio2.pause();
      audio2.currentTime = 0;
    }

    setIsAudioPlaying(false);
    setActiveAudio(null);
  };

  return (
    <LandingPageContainer>
      <BackgroundImage />
      <Overlay />
      <Title>
        <span
          onClick={playAudio1}
          className={`asma ${isAudioPlaying && activeAudio === 'audio1' ? 'playing' : ''}`}
        >
          Asma
        </span> & {" "}
        <span
          onClick={playAudio2}
          className={`osama ${isAudioPlaying && activeAudio === 'audio2' ? 'playing' : ''}`}
        >
          Osama
        </span>
      </Title>
      {isAudioPlaying ? <Subtitle style={{ display: 'flex', alignItems: 'center' }}>
        <SoundWave activeAudio={activeAudio} />
        <StopButton onClick={stopAudio}>Stop</StopButton>
      </Subtitle> : null}
      <ButtonContainer>
        <StyledButtonLink to="/kitab">Katib Kitab</StyledButtonLink>
        <StyledButtonLink to="/party">Engagement Party</StyledButtonLink>
      </ButtonContainer>
    </LandingPageContainer>

  );
};

export default LandingPage;
