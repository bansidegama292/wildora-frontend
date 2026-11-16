import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Animals from "./Pages/Animals";
import Tickets from "./pages/Tickets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import ShowTickets from "./pages/ShowTickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        {/* 🔥 lowercase route — navbar link sathe match */}
        <Route path="/my-tickets" element={<ShowTickets />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;