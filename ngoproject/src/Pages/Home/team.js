import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function Team() {

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
    return (
      <>
        <section className="team-section style-two">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h1>Team behind Raah</h1>
              <div className="text">Our work would not be possible without the work of our dedicated volunteers.</div>
            </div>
            <div className="row">
              {
                teamData.slice(0, 3).map(
                    (team, index) => (
                    <TeamData key={index}  name={team.name} designation={team.designation} image={team.image} />
                )
               )
              }
            </div>
            <div className="link-btn text-center"><NavLink to="/team" className="theme-btn btn-style-one"><span>Meet All Members</span></NavLink></div>
          </div>
        </section>
      </>
    );
  }
  

function TeamData(props)
{
    return(
        <>
            <div class="col-lg-4 team-block-one">
                <div class="inner-box wow fadeInDown" data-wow-delay="200ms">
                    <div class="image"><a href="#"><img src={`http://localhost:8000/images/${props.image}`} alt=""/></a></div>
                    <div class="lower-content">
                        <h4> <a href="#">{props.name}</a></h4>
                        <div class="designation">{props.designation}</div>
                    </div>
                    <ul class="social-icon-two">
                        <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                        <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                        <li><a href="#"><span class="fa fa-skype"></span></a></li>
                            <li><a href="#"><span class="fa fa-linkedin"></span></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Team;