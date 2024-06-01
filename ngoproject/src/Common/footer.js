import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <>
        <footer class="main-footer">
        <div class="auto-container">
            <div class="widget-wrapper">
                <div class="row">
                    <div class="col-lg-3 col-md-6 contact-widget footer-widget">
                        <h4 class="widget-title">Contact</h4>
                        <ul>
                        <li> E/207, Paranti Awas Society, Nr. Vasani Party Plot, Beside Shyam Residency-83, 
                            Opp. Dastan Circle, S P Ring Road, Kathwada - 382430 <br/> Ahmedabad, Gujarat</li>

                            <li><a href="mailto:rahgujarat2010@gmail.com">rahgujarat2010@gmail.com</a></li>
                        </ul>   
                        <h3><a href="tel:+(91) 7894561236">7894561236</a></h3>                 
                    </div>
                    <div class="col-lg-3 col-md-6 about-widget footer-widget">
                        <h4 class="widget-title">About</h4>
                        <ul>
                            <li><a href="/">Charity</a></li>
                            <li><NavLink to="/team">Volunteers</NavLink></li>
                            <li><NavLink to="/event">Upcoming Events</NavLink></li>
                            <li><a href="/">Trending News</a></li>
                            <li><NavLink to="/maincauses">Causes</NavLink></li>
                        </ul>                
                    </div>
                    <div class="col-lg-3 col-md-6 link-widget footer-widget">
                        <h4 class="widget-title">Quick Link</h4>
                        <ul>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="/">Donate Now</NavLink></li>
                            <li><a href="/joinus">Become a Volunteer</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                        </ul>               
                    </div>
                    <div class="col-lg-3 col-md-6 newsletter-widget footer-widget">
                        <h4 class="widget-title">Newsletter</h4>
                        <div class="text">Subscribe us and get latest news & <br/>upcoming events.</div>
                        <form action="#">
                            <input type="email" placeholder="Emial Address..."/>
                            <button class="submin-btn"><span class="flaticon-next"></span>Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="left-content">
                    <div class="icon"><img src="images/resource/logo-icon.png" alt=""/></div>
                    <div class="copyright-text">© 2024 All Rights Reserved by <a href="#">Raah NGO.</a></div>
                </div>
                <div class="right-content">
                    <ul class="social-icon-three">
                        <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                        <li><a href="#"><span class="fa fa-skype"></span></a></li>
                        <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
}

export default Footer;