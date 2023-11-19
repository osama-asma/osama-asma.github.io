import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import "./App.css";
import HomePage from "./HomePage";
import Katib from "./Katib";
import Party from "./Party";
import Header from "./Header";
import PasscodeInput from "./Password";
import mabrook from './mabrook.mp3'
import loo from './loo.mp3'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [isAuthed, setIsAuthed] = useState(
    sessionStorage.getItem("isAuthed") === "true"
  );
  const [isUnlocked, setIsUnlocked] = useState(
    sessionStorage.getItem("isUnlocked") === "true"
  );

  const [justSubmitted, setJustSubmitted] = useState(false);

  const [audio1] = useState(new Audio(loo));
  const [audio2] = useState(new Audio(mabrook));
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeAudio, setActiveAudio] = useState(null);

  return (
    <Router>
      <div>
        {isLoggedIn && (
          <Header
            setIsLoggedIn={setIsLoggedIn}
            setIsAuthed={setIsAuthed}
            isAuthed={isAuthed}
            justSubmitted={justSubmitted}
            setJustSubmitted={setJustSubmitted}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
              )
            }
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <HomePage
                  setIsAuthed={setIsAuthed}
                  isAuthed={isAuthed}
                  justSubmitted={justSubmitted}
                  setJustSubmitted={setJustSubmitted}
                  audio1={audio1}
                  audio2={audio2}
                  isAudioPlaying={isAudioPlaying}
                  setIsAudioPlaying={setIsAudioPlaying}
                  activeAudio={activeAudio}
                  setActiveAudio={setActiveAudio}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/kitab"
            element={isLoggedIn ? <Katib /> : <Navigate to="/" />}
          />
          <Route
            path="/party"
            element={isUnlocked ? <Party /> : <Navigate to="/home" />}
          />
          <Route
            path="/auth"
            element={
              isAuthed ? (
                <PasscodeInput
                  setIsUnlocked={setIsUnlocked}
                  isUnlocked={isUnlocked}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
