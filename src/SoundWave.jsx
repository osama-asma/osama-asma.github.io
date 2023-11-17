import React from 'react';

const SoundWave = ({ activeAudio }) => {
    return (
        <div className="sound-wave-container">
            <div className={`sound-wave ${activeAudio}`} />
            <div className={`sound-wave ${activeAudio}`} />
            <div className={`sound-wave ${activeAudio}`} />
            {/* Add more sound wave elements as needed */}
        </div>
    );
};

export default SoundWave;
