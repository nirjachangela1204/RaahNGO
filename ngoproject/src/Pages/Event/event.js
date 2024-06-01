import Header from "../../Common/header";
import EventHome from "./eventhome";
import EventDetail from "./eventdetail";
import Footer from "../../Common/footer";

function Event()
{
    return(
        <>
        <Header/>
        <EventHome/>
        <EventDetail/>
        <Footer/>
        </>
    );
}

export default Event;