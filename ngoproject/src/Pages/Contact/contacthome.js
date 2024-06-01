import { NavLink } from "react-router-dom";

function ContactHome()
{
    return(
        <>
            <section class="page-title" style={{backgroundImage:`url(images/background/bg-13.jpg)`}}>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Get Touch With Us</h1>
                        <ul class="bread-crumb">
                            <li><NavLink className="home" to="/"><span class="fa fa-home"></span></NavLink></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactHome;