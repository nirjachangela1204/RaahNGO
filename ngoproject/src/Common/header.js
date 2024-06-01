import React from 'react';
import { NavLink, useLocation} from "react-router-dom";

function Header()
{
    const location = useLocation();

    return(
        <>
            <header class="main-header">
                <div class="top-bar theme-bg">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-content">
                                <div class="text">Way Towards Inclusive Development...<a href="#" class="donate-box-btn">Donate Now.</a></div>
                            </div>
                            <div class="right-content">
                                <ul class="contact-info">
                                    <li><span class="flaticon-mail"></span><a href="mailto:rahgujarat2010@gmail.com">rahgujarat2010@gmail.com</a></li>
                                    <li><span class="flaticon-phone"></span><a href="tel:+(91) 7894561236">7894561236</a></li>
                                </ul>
                                <ul class="social-icon-one">
                                    <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                                    <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fa fa-skype"></span></a></li>
                                </ul>
                            </div>
                        </div>                
                    </div>
                </div>
                <div class="header-upper">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="logo-column">
                                <div class="logo-box">
                                    <div class="logo"><NavLink to="/"><img src="images/logo.png" alt="" title=""/></NavLink></div>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="option-wrapper">
                                    <div class="nav-outer">
                                        
                                        <nav class="main-menu navbar-expand-xl navbar-dark">
                                            
                                            <div class="collapse navbar-collapse">
                                                <ul class="navigation">
                                                    <li className={`${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/" style={{ fontWeight: location.pathname === '/' ? 'bold' : 'bold', color: location.pathname === '/' ? '#ed6221' : '' }}>
                                                            Home
                                                        </NavLink>
                                                    </li>
                                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/about" style={{ fontWeight: location.pathname === '/about' ? 'bold' : 'bold', color: location.pathname === '/about' ? '#ed6221' : '' }}>
                                                            About
                                                        </NavLink>
                                                    </li>
                                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/maincauses" style={{ fontWeight: location.pathname === '/maincauses' ? 'bold' : 'bold', color: location.pathname === '/maincauses' ? '#ed6221' : '' }}>
                                                            Causes
                                                        </NavLink>
                                                    </li>
                                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/event" style={{ fontWeight: location.pathname === '/event' ? 'bold' : 'bold', color: location.pathname === '/event' ? '#ed6221' : '' }}>
                                                            Events
                                                        </NavLink>
                                                    </li>
                                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/team" style={{ fontWeight: location.pathname === '/team' ? 'bold' : 'bold', color: location.pathname === '/team' ? '#ed6221' : '' }}>
                                                            Team
                                                        </NavLink>
                                                    </li>
                                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/contact" style={{ fontWeight: location.pathname === '/contact' ? 'bold' : 'bold', color: location.pathname === '/contact' ? '#ed6221' : '' }}>
                                                            Contact
                                                        </NavLink>
                                                    </li>
                                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                                        <NavLink to="/faq" style={{ fontWeight: location.pathname === '/faq' ? 'bold' : 'bold', color: location.pathname === '/faq' ? '#ed6221' : '' }}>
                                                            FAQ
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className={`link-btn ${location.pathname === '/' ? 'active' : ''}`}>
                                        <NavLink to="/joinus" style={location.pathname === '/joinus' ? { backgroundColor: '#ed6221', color:'white' } : {}} className="theme-btn btn-style-one"><span>Join Us</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu style-one">
                    <div class="menu-box">
                        <div class="logo"><NavLink to="/"><img src="images/logo.png" alt=""/></NavLink></div>
                    
                        <nav class="main-menu navbar-expand-xl navbar-dark">
                            <div class="navbar-header">
                            
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="flaticon-menu"></span>
                                </button>
                            </div>
                            
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navigation">
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/" style={location.pathname === '/' ? { color: '#ed6221' } : {}}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/about" style={location.pathname === '/about' ? { color: '#ed6221' } : {}}>
                                            About
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/maincauses" style={location.pathname === '/maincauses' ? { color: '#ed6221' } : {}}>
                                            Causes
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/event" style={location.pathname === '/event' ? { color: '#ed6221' } : {}}>
                                            Events
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/team" style={location.pathname === '/team' ? { color: '#ed6221' } : {}}>
                                            Team
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/contact" style={location.pathname === '/contact' ? { color: '#ed6221' } : {}}>
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/faq" style={location.pathname === '/faq' ? { color: '#ed6221' } : {}}>
                                            FAQ
                                        </NavLink>
                                    </li>
                                    <li className={` ${location.pathname === '/' ? 'active' : '' }`}>
                                        <NavLink to="/joinus" style={location.pathname === '/joinus' ? { color: '#ed6221' } : {}}>
                                            JOIN US
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>     
                </div>

                <div class="nav-overlay">
                    <div class="cursor"></div>
                    <div class="cursor-follower"></div>
                </div>
            </header>
        </>
    );
}

export default Header;
