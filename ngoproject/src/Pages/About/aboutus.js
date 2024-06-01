import { NavLink } from "react-router-dom";

function AboutUs()
{
    return(
        <>
            <section class="page-title" style={{backgroundImage:`url(images/background/bg-13.jpg)`}}>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Know About Us</h1>
                        <ul class="bread-crumb">
                            <li><NavLink className="home" to="/"><span class="fa fa-home"></span></NavLink></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;