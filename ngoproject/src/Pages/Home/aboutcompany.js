import { NavLink } from "react-router-dom";

function AboutCompany() {
    return(
        <>
        <section class="about-section">
        <div class="auto-container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-content-block">
                        <h1>Be part of a change <br/>you want to see in the world</h1>
                        <h4 style={{textAlign: "justify"}}>“Empowering children worldwide through education, support, and advocacy. Together, we're building a brighter future for every child.”</h4>
                        <div class="text wow fadeInUp" data-wow-delay="200ms" style={{textAlign: "justify"}}>In the year 2007-08, Raah got an opportunity to initiate intervention in a slum area of Ahmedabad by the support of scholarship received from Dalit Foundation, New Delhi. People in the slum were surrounded by numbers of problems such as poor socio-economic condition, customs, education and health related problems, labour issues, unemployment, child labour, family issues, addiction, etc when Raah started implementation. Looking at this pathetic situation of slum dwellers, Raah decided to undertake operation to disseminate awareness, education and to improve the standard of living by bringing a change in the lives of labours, children, youths, parents and women, hence Raah was formed on 5th February 2010.</div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="link-btn wow fadeInLeft" data-wow-delay="500ms"><span class="theme-btn btn-style-two"><i class="flaticon-next"></i><span>Our Mission</span></span></div> 
                                <div class="text" style={{textAlign: "justify"}}>Our mission is to create a safe and nurturing online platform where children from all walks of life can find support, resources, and opportunities to flourish.</div>
                            </div>
                            <div class="col-md-6">
                                <div class="link-btn wow fadeInRight" data-wow-delay="900ms"><span  class="theme-btn btn-style-three"><i class="flaticon-next"></i><span>Our Vision</span></span></div>
                                <div class="text" style={{textAlign: "justify"}}>Fostering a world where every child's potential is celebrated, where their voices are heard, and where they are empowered to thrive and shape a brighter tomorrow.</div>
                            </div>
                        </div>
                        <div class="link-btn-two">
                            <NavLink to="/about" className="theme-btn btn-style-one"><span>More About Us</span></NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-image-block">
                        <div class="logo-box"><div class="image wow zoomIn" data-wow-delay="500ms"><img src="images/resource/logo-icon.png" alt=""/></div></div>
                        <div class="image-one wow fadeInUp" data-wow-delay="200ms"><img src="images/resource/image-1.jpg" alt=""/></div>
                        <div class="image-two"><a href="https://youtu.be/zOCKgxwO4jE?si=mu3HpE71olUL4yr1" class="overlay-link lightbox-image video-fancybox"><span class="flaticon-multimedia"></span></a></div>
                        <div class="image-three wow fadeInRight" data-wow-delay="200ms"><img src="images/resource/image-2.jpg" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default AboutCompany;