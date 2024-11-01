import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppFr from './AppFr';
import AppEn from './AppEn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fr" element={<AppFr />} />
        <Route path="/en" element={<AppEn />} />
        <Route path="*" element={<AppFr />} />
      </Routes>
    </Router>
  );
}

export default App;
