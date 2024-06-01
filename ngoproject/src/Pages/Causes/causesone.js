import axios from "axios";
import { useState, useEffect } from "react";

function CausesOne() {

    const [causesData, setCausesData] = useState([]);
    
    useEffect(() => {
        //Fetch Causes data from the API
        const fetchCausesData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/fetchcauses');
                setCausesData(response.data.Data);
            }
            catch(error){
                console.error('Error Fetching Causes Data:',error);
            }
        };
        fetchCausesData();
    },[]); //Empty dependency array ensures useEffect runs only once after component mounts
    
    return(
        <>
        <section class="causes-section-four">
            <div class="auto-container">
                <div class="cause-wrapper">
                    <div class="row">
                    {
                        causesData.map(
                            (cause, index) => (
                                <CausesData key={index} image={cause.image} title={cause.title} raised={cause.raised} goal={cause.goal} />
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

function CausesData (props) {
    return(
        <>
         <div className="cause-block-four style-two col-lg-4 col-md-6">
            <div className="inner-box">
                <div className="image">
                    <img src={`http://localhost:8000/images/${props.image}`} style={{innerWidth: '200px', height: '200px'}} alt="" />
                    <div className="overlay"><a href="#" className="donate-box-btn">Donate Now</a></div>
                </div>
                <div className="lower-content">
                    <div className="wrapper-box">
                        <h4><a href="cause-details.html">{props.title}</a></h4>
                        <div className="info-box">
                            <div className="raised">
                                <a href="#"><span>Raised:</span> {props.raised}</a>
                            </div>
                            <div className="goal">
                                <a href="#"><span>Goal:</span> {props.goal}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default CausesOne;
