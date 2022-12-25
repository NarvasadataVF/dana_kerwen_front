import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./page/About";
import ContactUs from "./page/ContactUs";
import Home from "./page/Home";
import Logisctics from "./page/Logistics";
import Career from "./page/Career";
import News from "./page/News";
import CurrentNews from "./page/CurrentNews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/About" element={<About />}/>
            <Route exact path="/News" element={<News />}/>
            <Route exact path="/Services/logistics" element={<Logisctics />}/>
            <Route exact path="/Career" element={<Career />}/>
            <Route exact path="/Contacts" element={<ContactUs />}/>

            {/* Router with Params */}
            <Route exact path="/news/:itemId" element={<CurrentNews />}/>          
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
