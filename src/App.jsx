import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import CardDetail from "../pages/CardDetail";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import Recipes from "../pages/Recipes";
import HealthTip from "../pages/HealthTip";
import AboutUs from "../pages/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<CardDetail />} />
            <Route path="/healthtip" element={<HealthTip />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;