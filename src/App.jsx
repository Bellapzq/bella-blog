import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trip from "./pages/Trip";
import Tasty from "./pages/Tasty";
import About from "./pages/About";
import LijiangShangrila from "./pages/Trip/LijiangShangrila";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/trip/lijiang-shangrila-3-5d" element={<LijiangShangrila />} />
        <Route path="/tasty" element={<Tasty />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}