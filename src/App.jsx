import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import './App.css';
import HomePage from './HomePage';
import Katib from './Katib';
import Party from './Party';
import Header from './Header';
import PasscodeInput from './Password';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const [isAuthed, setIsAuthed] = useState(sessionStorage.getItem('isAuthed') === 'true');
  const [isUnlocked, setIsUnlocked] = useState(sessionStorage.getItem('isUnlocked') === 'true');
  return (
    <Router>
      <div>
        {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} setIsAuthed={setIsAuthed} isAuthed={isAuthed} />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/kitab" element={isLoggedIn ? <Katib /> : <Navigate to="/" />} />
          <Route path="/party" element={isUnlocked ? <Party /> : <Navigate to="/home" />} />
          <Route path="/auth" element={isAuthed ? <PasscodeInput setIsUnlocked={setIsUnlocked} isUnlocked={isUnlocked} /> : <Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
