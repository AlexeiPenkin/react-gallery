import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

    return (
        <div className="app">
            <div className="app__title">
                <h1>World Streets<br></br><span>Photo Gallery</span></h1>
            </div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                </Routes>
                <Footer />
        </div>
    );
}
  
  export default App;