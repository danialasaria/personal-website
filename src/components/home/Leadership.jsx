import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Nationals2 from "../../editable-stuff/nationals2.jpeg"
import Culture from "../../editable-stuff/culture.jpg"
import Committee from "../../editable-stuff/committee.jpg"
import Trophy from "../../editable-stuff/trophy.jpg"
import Handshake from "../../editable-stuff/handshake.jpg"
import Nationals from "../../editable-stuff/nationals.jpeg"
import Americanopen from "../../editable-stuff/americanopen.jpeg"
import Family from "../../editable-stuff/family.jpeg"

const Leadership = () => {
    return (
        <div id="leadership" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center">Chess</h1>
                {/* <p className="lead text-center" style={{fontSize:'22px'}}>
                    I empower people to acheive their goals. And I absolutely love it.
                </p><br/><br/> */}
                <br/>
                <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                  <p className="lead text-left">
                  I began to play chess at 7 years old and after my coach began our first class by saying, "Every champion was once a beginner" 
                  my youthful imagination ran wild and I was hooked. My early development in chess proved to 
                  be nontraditional where my structured classes provided by my school were supplemented by the
                   aggressive, unconventional playing styles I learned from spending my weekends sneaking games in with 
                   hustlers at my local chess park. Yet learning these vastly different approaches to the game allowed me to become a more complete player, and 
                   after 6 weeks of practice, I could beat every kid in my class and almost defeated my coach. At age 11 I achieved the title of Master,
                    and since then have become a 5-time National Champion and am currently the #1 18-year-old on the west coast of the United States. In addition, 
                    I have defeated numerous world-renowned Grandmasters and played some of the best in the world including world champion Magnus Carlsen and Grandmaster Hikaru 
                    Nakamura. My peak United States Chess Federation and International Chess Federation ratings are 2420 and 2340 respectively, awarding me the titles of 
                    National Master and FIDE Master (top .43% in the world).{/* I've been extremely grateful to have opportunities to lead my peers
                      and make an impact on the Austin community. In my role as the <b>Vice President of the 
                      Student Engineering Council</b>, I cultivated a culture of 
                      inclusivity, collaboration, and ambition through leading new-member recruitment and 
                      community building events.
                      Prior to that position, I led service intiatives
                      that contributed 28,664 meals to the Central Texas Food Bank and over $3,000 to the
                      SAFE Alliance in my position as the <b>Service Director of the Student Engineering Council</b>.
                      Outside of these roles, I worked to level the playing field in STEM by mentoring and teaching children
                    of lower socioeconomic status through my role as a <b>Code Orange Mentor</b>. */}
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
                <Carousel>
                    <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Family}
                    alt="Family"
                    width="615"
                    height="450"
                  /> 
                  {/* <Carousel.Caption>
                    <h2>Student Engineering Council Vice President</h2>
                    <h5>Cultivated an organizational culture of inclusivity, collaboration, and ambition.</h5>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div>
                <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Nationals2}
                    alt="Nationals2"
                    width="615"
                    height="450"
                  /> 
                  {/* <Carousel.Caption>
                <h2>Student Engineering Council Service Director</h2>
                <h5>Promoted student involvement in the community through volunteering and philanthropy.</h5>
                </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div> */}
                {/* <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                {/* <Carousel.Item>
                  <img
                    className="rounded"
                    src={Code}
                    alt="codeorange"
                    width="300"
                    height="475"
                  /> 
                  </Carousel.Item> */}
                {/* </div>
                </div> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Americanopen}
                    alt="SEC"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Handshake}
                    alt="Handshake"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                 {/* <Carousel.Item>
                  <img
                    className="rounded"
                    src={Custodians}
                    alt="custodialappreciation"
                    width="615"
                    height="450"
                  /> 
                 </Carousel.Item> 
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Committee}
                    alt="committee"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>*/}
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Trophy}
                    alt="volunteer"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Nationals}
                    alt="Nationals"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                </Carousel>
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Leadership;