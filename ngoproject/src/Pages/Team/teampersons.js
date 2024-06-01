import axios from "axios";
import { useState,useEffect } from "react";

function TeamPersons()
{
    const [teamData, setTeamData] = useState([]);
    
    useEffect(() => {
        //Fetch team data from the API
        const fetchTeamData = async () => {
            try{
                const response = await axios.get('http://localhost:8000/fetchteam');
                setTeamData(response.data.Data);
            }
            catch(error){
                console.error('Error Fetching Team Data:',error);
            }
        };
        fetchTeamData();
    },[]); //Empty dependency array ensures useEffect runs only once after component mounts

    return(
        <>
        <section class="team-section-three">
        <div class="auto-container">
            <div class="row">
            {
                teamData.map(
                    (team, index) => (
                    <TeamPersonsData key={index}  name={team.name} designation={team.designation} image={team.image} text={team.text} />
                )
               )
              }
            </div>
        </div>
    </section>
        </>
    );
}

function TeamPersonsData(props)
{
    return(
        <>
            <div class="col-lg-4 team-block-three">
                    <div class="inner-box wow fadeInDown" data-wow-delay="200ms">
                        <div class="image">
                            <a href="#"><img src={`http://localhost:8000/images/${props.image}`} alt=""/></a>
                            <div class="overlay">
                                <div>
                                    <h4>Join our team</h4>
                                    <div class="text">{props.text}</div>
                                    <div class="link-btn"><a href="#" class="theme-btn btn-style-one"><span>Join Now</span></a></div>
                                </div> 
                            </div>
                        </div>
                        <div class="lower-content">
                            <h4> <a href="#">{props.name}</a></h4>
                            <div class="designation">{props.designation}</div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default TeamPersons;