import { Container } from '@mui/material';
import React from 'react';

import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/TopMenu';
import Episode from './pages/Episode';
import Episodes from './pages/Episodes';
import Home from './pages/Home';


function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<Episode />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
