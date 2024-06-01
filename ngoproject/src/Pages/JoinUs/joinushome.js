import { NavLink } from "react-router-dom";

function JoinusHome()
{
    return(
        <>
            <section class="page-title" style={{backgroundImage:`url(images/background/bg-13.jpg)`}}>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Become a Volunteer</h1>
                        <ul class="bread-crumb">
                            <li><NavLink className="home" to="/"><span class="fa fa-home"></span></NavLink></li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default JoinusHome;