import React from "react";
import Movies from "./pages/movies";
function App() {
  return (<>

    <h1 className="text-3xl text-amber-300 font-bold">
      Ticket Booking System
    </h1>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>


  </>);
}

export default App;