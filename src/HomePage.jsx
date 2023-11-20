import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imagePath from './kitabImages/asmaosama.webp';
import heart from './heart.svg';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer, StyledButtonLink } from './components';
import SoundWave from './SoundWave';
import Modal from './Modal';
import config from './config';

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

const LandingPage = ({ setIsAuthed, isAuthed, setJustSubmitted, justSubmitted, audio1, audio2, isAudioPlaying, setIsAudioPlaying, activeAudio, setActiveAudio }) => {
  const navigate = useNavigate()


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
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    setIncorrectPassword(false)
    setInputValue(event.target.value);
  };

  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (value) => {
    if (value === config.quantumPenguin || value === config.moonGiraffe) {
      sessionStorage.setItem('isAuthed', 'true');
      setIsAuthed(true);
      setShowModal(false);
      setJustSubmitted(true); // Add a state to track recent submission
    } else {
      setIncorrectPassword(true);
    }
  };

  useEffect(() => {
    if (isAuthed && justSubmitted) {
      navigate('/auth');
      setJustSubmitted(false); // Reset the state after navigation
    }
  }, [isAuthed, justSubmitted, navigate, setJustSubmitted]);

  const [isArabic, setIsArabic] = useState(false)

  return (
    <>
      {showModal && <Modal value={inputValue} setValue={handleInputChange} showModal={setShowModal} buttonText={'Submit'} handleSubmit={handleSubmit} incorrectPassword={incorrectPassword} />}
      <LandingPageContainer>
        <BackgroundImage />
        <Overlay />
        {!isArabic ? <Title>
          <span
            onClick={playAudio1}
            className={`asma ${isAudioPlaying && activeAudio === 'audio1' ? 'playing' : ''}`}
          >
            Asma
          </span> <span className='language' onClick={() => setIsArabic(true)}>&</span> {" "}
          <span
            onClick={playAudio2}
            className={`osama ${isAudioPlaying && activeAudio === 'audio2' ? 'playing' : ''}`}
          >
            Osama
          </span>
        </Title> : <Title>
          <span
            onClick={playAudio1}
            className={`asma ${isAudioPlaying && activeAudio === 'audio1' ? 'playing' : ''}`}
          >
            أسماء
          </span> <span className='language' onClick={() => setIsArabic(false)}>و</span> {" "}
          <span
            onClick={playAudio2}
            className={`osama ${isAudioPlaying && activeAudio === 'audio2' ? 'playing' : ''}`}
          >
            أسامة
          </span>
        </Title>}
        {isAudioPlaying ? <Subtitle style={{ display: 'flex', alignItems: 'center' }}>
          <SoundWave activeAudio={activeAudio} />
          <StopButton onClick={stopAudio}>Stop</StopButton>
        </Subtitle> : null}
        <ButtonContainer>
          <StyledButtonLink to="/kitab">Katib Kitab</StyledButtonLink>
          <StyledButtonLink to="/party" onClick={(e) => {
            e.preventDefault()
            if (sessionStorage.getItem('isAuthed') === 'true') {
              setIsAuthed(true)
              navigate('/auth')
            }
            else {
              setInputValue('')
              setShowModal(true)
            }
          }}>Engagement Party</StyledButtonLink>
        </ButtonContainer>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
