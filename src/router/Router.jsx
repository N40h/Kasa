import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Accommodation from "../pages/Accommodation/Accommodation";
import Error from "../pages/Error/Error";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Router() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="/fiche-logement/:id" element={<Accommodation />} />
                        <Route path="*" element={<Error/>} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </BrowserRouter>
    )
}