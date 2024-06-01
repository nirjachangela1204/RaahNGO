import axios from "axios";
import { useState, useEffect } from "react";

function EventDetail()
{
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

    return(
        <>
        <section class="events-section style-two">
        <div class="auto-container">
            <div class="row">
                {
                 eventData.map(
                    (event, index) => (
                    <EventData key={index} image={event.image} date={event.date}  month={event.month} time={event.time} title={event.title} location={event.location}/>
                    )
                )
                }
            </div>
        </div>
    </section>
        </>
    );
}

function EventData(props)
{
    return(
        <>
            <div class="event-block-one col-lg-4 col-md-6">
                    <div class="inner-box">
                        <div class="image"><img src={`http://localhost:8000/images/${props.image}`} alt=""/></div>
                        <div class="lower-content">
                            <div class="date">
                                <h1>{props.date}</h1>
                                <div class="text"><span>{props.month}</span> <br/>{props.time}</div>
                            </div>
                            <h4><a href="event-details.html">{props.title}</a></h4>
                            <div class="location"><span class="flaticon-point"></span>{props.location}</div>
                        </div>
                        <div class="link-btn"><a href=""><span class="flaticon-next-1"></span>Join With Us</a></div>
                    </div>
            </div>
        </>
    );
}

export default EventDetail;