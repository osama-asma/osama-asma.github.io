import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';

const Header = ({ setIsLoggedIn, setIsAuthed, isAuthed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()
    const partyPage = location.pathname === '/party'
    const navigate = useNavigate()

    const HeaderContainer = styled.div`
  background-color: ${partyPage ? '#e0b8a6' : '#E64C3C'};
  color: #fff;
  padding: 10px;
`;

    const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

    const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 8px;
  margin: 0 10px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fff;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
    text-align: center;
    width: 100%;
  }
`;

    const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('isAuthed');
        sessionStorage.removeItem('isUnlocked');
        setIsLoggedIn(false);
        setIsAuthed(false)
    };
    const [showModal, setShowModal] = useState(false)
    // State to manage the input value
    const [inputValue, setInputValue] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState(false);


    // Event handler to update the state when the input changes
    const handleInputChange = (event) => {
        setIncorrectPassword(false)
        setInputValue(event.target.value);
    };

    const [justSubmitted, setJustSubmitted] = useState(false);

    const handleSubmit = (value) => {
        if (value === 'sharpener') {
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
    }, [isAuthed, justSubmitted, navigate]);


    return (
        <>
            {showModal && <Modal value={inputValue} setValue={handleInputChange} showModal={setShowModal} buttonText={'Submit'} handleSubmit={handleSubmit} incorrectPassword={incorrectPassword} />}
            <HeaderContainer>
                <HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>
                <NavLinksContainer isOpen={isOpen}>
                    <StyledNavLink to="/home" exact activeClassName="active">
                        Home
                    </StyledNavLink>
                    <StyledNavLink to="/kitab" activeClassName="active">
                        Katib Kitab
                    </StyledNavLink>
                    <StyledNavLink activeClassName="active" to="/party" onClick={(e) => {
                        e.preventDefault()
                        if (sessionStorage.getItem('isAuthed') === 'true') {
                            setIsAuthed(true)
                            navigate('/auth')
                        }
                        else {
                            setInputValue('')
                            setShowModal(true)
                        }
                    }}  >
                        Engagement Party
                    </StyledNavLink>
                    <StyledNavLink to="/login" onClick={handleLogout}>
                        Logout
                    </StyledNavLink>
                </NavLinksContainer>
            </HeaderContainer>
        </>
    )
}

export default Header