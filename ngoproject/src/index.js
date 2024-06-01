import React, {useEffect}from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import MainCauses from './Pages/Causes/maincauses';
import Event from './Pages/Event/event';
import MeetTeam from './Pages/Team/meetteam';
import Contact from './Pages/Contact/contact';
import Faq from './Pages/Faq/faq';
import reportWebVitals from './reportWebVitals';
import Joinus from './Pages/JoinUs/joinus';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/maincauses" element={<MainCauses />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<MeetTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/joinus" element={<Joinus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
