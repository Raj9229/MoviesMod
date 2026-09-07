import React from "react";
import Movies from "./pages/movies";
import Home from "./pages/home";
import Navbar from "./components/navbar";


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<>

    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>


  </>);
}

export default App;