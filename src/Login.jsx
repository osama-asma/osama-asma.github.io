import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = ({ setIsLoggedIn, isLoggedIn }) => {
    const [password, setPassword] = useState('');
    const [wrong, setWrong] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === 'islamicgirl48') {
            sessionStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
        } else {
            setWrong(true)
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/home');
        }
    }, [isLoggedIn, navigate]);

    const StyledButton = styled.button`
    padding: 10px;
    margin-top: 16px;
    background-color: #394867;
    color: #c0c0c0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        opacity: 90%;

    }
`;

    return (
        <div>
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Password:</h2>
                    <div style={{ marginTop: '16px' }}>
                        <label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => {
                                    setWrong(false)
                                    setPassword(e.target.value)
                                }}
                            />
                        </label>
                    </div>

                    {wrong && <>
                        <div>Wrong password Asma 🤭</div>
                        <div style={{ color: 'red' }}>If this isn't asma, leave now! 😡👮🏽‍♀️🚔</div>
                    </>}
                    <StyledButton type='submit'>Log in</StyledButton>
                </form>
            </div >
        </div>

    );
};

export default Login;
