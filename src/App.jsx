import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Numbers from "./pages/Numbers";
import Users from "./pages/Users";

export default function App() {
    return (
        <div>
            <Navbar />


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/numbers" element={<Numbers />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
}