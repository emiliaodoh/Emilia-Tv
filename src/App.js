// import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from './component/pages/Details';
import Home from './component/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
