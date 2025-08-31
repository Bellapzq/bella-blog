import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trip from "./pages/Trip";
import Tasty from "./pages/Tasty";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/tasty" element={<Tasty />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}