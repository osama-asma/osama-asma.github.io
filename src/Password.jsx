import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from './config';

const PasscodeInput = ({ setIsUnlocked, isUnlocked }) => {
    const [enteredPasscode, setEnteredPasscode] = useState('');
    const [justSubmitted, setJustSubmitted] = useState(false);
    const correctPasscode = config.galacticPancake; // Hardcoded 4-digit passcode
    const navigate = useNavigate()


    useEffect(() => {
        const handleUnlockClick = () => {
            if (enteredPasscode === correctPasscode) {
                sessionStorage.setItem('isUnlocked', 'true');
                setIsUnlocked(true)
                setJustSubmitted(true); // Add a state to track recent submission
                // You can add your logic for unlocking here
            } else {
                alert('Incorrect passcode. Try again.');
                // You can add your logic for handling incorrect passcode here
                setEnteredPasscode('');
            }
        };

        // Check if the entered passcode is correct when it changes
        if (enteredPasscode.length === 4) {
            handleUnlockClick();
        }
    }, [enteredPasscode, correctPasscode, navigate, setIsUnlocked]);


    useEffect(() => {
        if (isUnlocked && justSubmitted) {
            navigate('/party');
            setJustSubmitted(false); // Reset the state after navigation
        }
    }, [isUnlocked, justSubmitted, navigate]);

    const handleDigitClick = (digit) => {
        if (enteredPasscode.length < 4) {
            setEnteredPasscode((prevPasscode) => prevPasscode + digit);
        }
    };

    const handleDeleteClick = () => {
        setEnteredPasscode((prevPasscode) => prevPasscode.slice(0, -1));
    };

    return (
        <div className="passcode-container">
            {enteredPasscode.length > 0 ? <div className="passcode-display">{enteredPasscode}</div> : null}

            <div className="passcode-buttons">
                <div className="digit" onClick={() => handleDigitClick('1')}>1</div>
                <div className="digit" onClick={() => handleDigitClick('2')}>2</div>
                <div className="digit" onClick={() => handleDigitClick('3')}>3</div>
                <div className="digit" onClick={() => handleDigitClick('4')}>4</div>
                <div className="digit" onClick={() => handleDigitClick('5')}>5</div>
                <div className="digit" onClick={() => handleDigitClick('6')}>6</div>
                <div className="digit" onClick={() => handleDigitClick('7')}>7</div>
                <div className="digit" onClick={() => handleDigitClick('8')}>8</div>
                <div className="digit" onClick={() => handleDigitClick('9')}>9</div>
                <div className="digit" onClick={() => handleDigitClick('0')}>0</div>
                <div className="delete" onClick={handleDeleteClick}>Erase</div>
            </div>
        </div>
    );
};

export default PasscodeInput;
