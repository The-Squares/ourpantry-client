import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonorHome from "Pages/Donors/Home/Home";
import DonorPantry from "Pages/Donors/Pantry/Pantry";
import Map from "Pages/Donors/Map/Map";
import ShelterHome from "Pages/Shelters/Home/ShelterHome";
import ShelterInventory from "Pages/Shelters/Inventory/ShelterInventory";
import Welcome from "Pages/Welcome/Welcome";
import Mode from "Pages/Mode/Mode";
import Login from "Pages/Login/Login";
import Logout from "Pages/Logout/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donors" element={<DonorHome />} />
        <Route path="/donors/pantry/:pantryid" element={<DonorPantry />} />
        <Route path="/donors/map" element={<Map />} />
        <Route path="/shelters" element={<ShelterHome />} />
        <Route path="/shelters/inventory" element={<ShelterInventory />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
