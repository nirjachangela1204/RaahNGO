function EventHome()
{
    return(
        <>
        <section class="upcoming-events-section-two" style={{backgroundImage: `linear-gradient(rgba(212, 112, 24, 1 ), rgba(212, 112, 24, 0.351)), url(images/background/eventhome1.jpeg)`}}>
        <div class="auto-container">
            <div class="sec-title text-center light">
                <h5>Upcoming Events</h5>
                <h1>Raah Awarness Events</h1>
            </div>
            <div class="wrapper-box">
                <div class="countdown-timer-two">
                    <div class="default-coundown">
                        <div class="box">
                            <div class="countdown time-countdown-three" data-countdown-time="2019/12/28"></div>
                        </div>
                    </div>
                </div>
                <div class="event-block-five">
                    <h1>Raah - 2024</h1>
                    <div class="text" style={{color:"white",fontWeight:"bold"}}>E/207, Paranti Awas Society, Kathwada<br/>08 August 2023, 10.00am</div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default EventHome;