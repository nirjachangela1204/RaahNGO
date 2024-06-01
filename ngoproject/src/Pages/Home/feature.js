import { NavLink } from "react-router-dom";

const featuresData = [
    {
        icon: "images/icons/icon-6.png",
        title: "Become a Volunteer",
        description: "Make Your Mark: Volunteer to Shape Brighter Tomorrows.",
        backgroundImage: "images/background/bg-2.jpg"
    },
    {
        icon: "images/icons/icon-7.png",
        title: "Shelter for Homeless",
        description: "Building Hope: Providing Shelter for Every Homeless Heart.",
        backgroundImage: "images/background/bg-2.jpg"
    },
    {
        icon: "images/icons/icon-8.png",
        title: "Make World Happier",
        description: "Every Act of Giving Ignites a Beacon of Happiness.",
        backgroundImage: "images/background/bg-2.jpg"
    },
    {
        icon: "images/icons/icon-9.png",
        title: "Give Healthy Life",
        description: "From Heart to Hand: Spreading Love, Changing Lives with Charity.",
        backgroundImage: "images/background/bg-2.jpg"
    }
];

function Feature() {
    return (
        <>
            <section className="feature-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h1>Live as a human being</h1>
                        <div className="text">The right way to live as a human being, Just help to those people really need your help.</div>
                    </div>
                    <div className="row">
                    {
                        featuresData.map(
                            (data, index) => (
                            <FeaturesData key={index} img={data.icon} title={data.title} desc={data.description} />
                            )
                        )
                    }
                    </div>
                </div>
                <div className="call-to-action">
                    <div className="auto-container">
                        <div className="wrapper-box">
                            <div className="left-content">
                                <h3>You have the power to bring happiness.</h3>
                                <div className="text">Expound the actual teachings of the great explorer of the truth, the master of human happiness.</div>
                            </div>
                            <div className="right-content">
                                <NavLink to="/team" className="theme-btn btn-style-five"><span>Meet Our Team</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function FeaturesData(props) {
    return (
        <div className="col-lg-3 col-md-6 feature-block-two">
            <div className="inner-box">
                <div className="icon-box">
                    <img src={props.img} alt=""/>
                </div>
                <h4>{props.title}</h4>
                <div className="overlay" style={{backgroundImage: `url(${props.backgroundImage})`}}>
                    <h4>{props.title}</h4>
                    <div className="text">{props.desc}</div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
