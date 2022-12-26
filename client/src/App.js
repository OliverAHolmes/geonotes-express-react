import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OpenStreetMaps } from './Pages/OpenStreetMaps';
import { ThreeGlobe } from "./Pages/ThreeGlobe";
import { ReactFiber } from "./Pages/ReactFiber";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpenStreetMaps />} />
        <Route path="/globe" element={<ThreeGlobe />} />
        <Route path="/fiber" element={<ReactFiber />} />
      </Routes>
    </BrowserRouter>
  );
}