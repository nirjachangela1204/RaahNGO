import React from 'react';
import CountUp from 'react-countup';

const countdata = [
  {
    endValue: 1.0,
    decimals: 1,
    duration: 3,
    text: 'Beneficiaries of \Raah NGO',
    affix: "K",
  },
  {
    endValue: 100,
    decimals: 0,
    duration: 3,
    text: 'Happy Donators & \nContributors',
    affix: "+",
  },
  {
    endValue: 10,
    decimals: 0,
    duration: 3,
    text: 'Lovely Volunteers \nInvolved',
    affix: "",
  },
];

function Count() {
  return (
    <section className="funfacts-section-two style-two" style={{ backgroundImage: `url(images/background/bg-12.jpg)` }}>
      <div className="auto-container">
        <div className="sec-title text-center light">
          <h5>Our Impacts</h5>
          <h1>We're dedicated to making a difference in people's lives. <br/> Here's a glimpse of our impact</h1>
        </div>
        <div className="outer-box">
          <div className="funfact-wrapper row">
            {countdata.map((a, i) => (
              <CountData key={i} delay={a.delay}  title={a.title} end={a.endValue} decimals={a.decimals} duration={a.duration} prefix={a.prefix} separator={a.separator} affix={a.affix} text={a.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountData(props) {
    
  return (
    <div className="col-lg-4 counter-block-two wow fadeInUp" data-wow-delay="300ms">
      <div className="inner-box">
        <div className="count-box">
          <CountUp  start={0} end={props.end} decimals={props.decimals} duration={props.duration} />
          <span className="affix">{props.affix}</span>
        </div>
        <div className="text" style={{ whiteSpace: 'pre-line' }}>
            {props.text}
        </div>
      </div>
    </div>
  );
}

export default Count;
