import { useState } from 'react'
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { AnimatePresence } from 'framer-motion';

function App() {

    const location = useLocation()

    return (
        <>
            <Navbar/>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
