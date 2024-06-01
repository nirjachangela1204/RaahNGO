import Header from "../../Common/header";
import Slider from "./slider";
import AboutCompany from "./aboutcompany";
import Feature from "./feature";
import Project from "./project";
import Number from "./number";
import Event from "./event";
import Testimonial from "./testimonial";
import Team from "./team";
import Footer from "../../Common/footer";

function Home () {
    return(
        <>
        <Header />
        <Slider />
        <AboutCompany />
        <Feature />
        <Project />
        <Number />
        <Event />
        <Testimonial />
        <Team />
        <Footer />
        </>
    );
}

export default Home ;