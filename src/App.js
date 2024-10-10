import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import NotFound from "./components/NotFound";
// import Profile from "./sandy/Profile";

function App() {
    return (
        <div>
            <>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    {/* <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/sale" element={<About />} />
                    <Route exact path="/collection" element={<Contact />} />
                    <Route exact path="/created" element={<Contact />} />
                    <Route exact path="/activity" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes> */}
                </BrowserRouter>
            </>
        </div>
    );
}

export default App;
