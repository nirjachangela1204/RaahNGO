import React from 'react';
import CountUp from 'react-countup';

const counterBlocksData = [
    {
        iconSrc: "images/icons/icon-3.png",
        title: "Beneficiaries",
        endValue: 1.0,
        decimals: 1,
        duration: 3,
        affix: "K",
        text: "Over 1000 directly beneficiaries of our\n  foundation programme.",
        delay: 300
    },
    {
        iconSrc: "images/icons/icon-4.png",
        title: "Happy Donators",
        endValue: 100,
        decimals: 0,
        duration: 3,
        separator: ",",
        affix: "+",
        text: "100+ people donate our charity to with\n  100% happy heart.",
        delay: 600
    },
    {
        iconSrc: "images/icons/icon-5.png",
        title: "Volunteers",
        endValue: 10,
        decimals: 0,
        duration: 3,
        separator: ",",
        affix: "",
        text: "Our work would not be possible without\n dedicated 10 volunteers.",
        delay: 300
    }
];

function Number() {
    return(
        <>
            <section className="funfacts-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h1>Numbers speaking</h1>
                        <div className="text">We're dedicated to making a difference in people's lives.
                        Here's a glimpse of our impact</div>
                    </div>
                    <div className="outer-box">
                        <div className="funfact-wrapper row">
                            {
                                counterBlocksData.map(
                                    (a,i) => (
                                        <CounterBlocksData key={i} delay={a.delay} img={a.iconSrc} title={a.title} end={a.endValue} decimals={a.decimals} duration={a.duration} prefix={a.prefix} separator={a.separator} affix={a.affix} text={a.text} />
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function CounterBlocksData (props) {
    return(
        <>
            <div className="col-lg-4 counter-block wow fadeInUp" data-wow-delay={props.delay}>
                <div className="inner-box">
                    <div className="icon-box"><img src={props.img} alt=""/></div>
                    <h4>{props.title}</h4>
                    <div className="count-box">
                        <CountUp start={0} end={props.end} decimals={props.decimals} duration={props.duration} separator={props.separator} /> 
                        <span className="affix">{props.affix}</span>
                    </div>
                    <div className="text" style={{ whiteSpace: 'pre-line' }}>
                        {props.text}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Number;