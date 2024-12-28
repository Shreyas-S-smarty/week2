import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import DeezerSearch from './components/DeezerSearch';

const App = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/deezer" element={<DeezerSearch />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  </Router>
);

export default App;
