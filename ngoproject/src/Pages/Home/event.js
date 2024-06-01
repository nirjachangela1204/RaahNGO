import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import { useState, useEffect } from "react";


function Event() {
    const options = {
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    const [eventData, setEventData] = useState([]);
    
    useEffect(() => {
        //Fetch event data from the API
        const fetchEventData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/fetchevent');
                setEventData(response.data.Data);
            }
            catch(error){
                console.error('Error Fetching Event Data:',error);
            }
        };
        fetchEventData();
    },[]); //Empty dependency array ensures useEffect runs only once after component mounts

    return (
        <section className="events-section">
            <div className="event-tabs">
                <div className="auto-container">
                    <div className="row m-0 justify-content-md-between align-items-end">
                        <div className="sec-title">
                            <h1>Our exciting events</h1>
                            <div className="text">Here are our exciting events...would be great to see you at the next one!</div>
                        </div>
                    </div>
                    <div className="event-tab-wrapper">
                        <div className="event-tabs-content">
                            <div className="event-tab active-tab" id="event-tab-1">
                                <OwlCarousel className="event-carousel owl-theme" owl-carousel owl-dot-style-one owl-nav-none>
                                {
                                    eventData.map(
                                        (event, index) => (
                                        <EventData key={index} image={event.image} date={event.date} month={event.month} time={event.time} title={event.title} location={event.location} />
                                        )
                                    )
                                }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EventData(props) {
    return (
        <div className="event-block-one">
            <div className="inner-box">
                <div className="image"><img src={`http://localhost:8000/images/${props.image}`} alt=""/></div>
                <div className="lower-content">
                    <div className="date">
                        <h1>{props.date}</h1>
                        <div className="text"><span>{props.month}</span> <br/>{props.time}</div>
                    </div>
                    <h4><a href="event-details.html">{props.title}</a></h4>
                    <div className="location"><span className="flaticon-point"></span>{props.location}</div>
                </div>
                <div className="link-btn"><a href=""><span className="flaticon-next"></span>Join With Us</a></div>
            </div>
        </div>
    );
}

export default Event;