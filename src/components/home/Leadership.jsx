import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Blue from "../../editable-stuff/trophy.jpg"
import Handshake from "../../editable-stuff/handshake.jpg"
import Nationals from "../../editable-stuff/Nationals.jpg"
import Americanopen from "../../editable-stuff/americanopen.jpeg"
import Gold from "../../editable-stuff/gold.jpg"
import Red from "../../editable-stuff/red.jpg"
import DanialPrize from "../../editable-stuff/DanialPrize.jpg"
import Polgar from "../../editable-stuff/Polgar.jpg"

const Leadership = () => {
    return (
        <div id="leadership" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center">Chess</h1>
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
                    I have defeated numerous world-renowned Grandmasters and played some of the best in the world including World Champion Viswanathan Anand and Grandmaster Hikaru 
                    Nakamura. My peak United States Chess Federation and International Chess Federation ratings are 2420 and 2340 respectively, awarding me the titles of 
                    National Master and FIDE Master (top .43% in the world Inspired to share this passion I created the Asaria School of Chess where I teach students ages 5-80 from across the US, UK, and Asia.{/* I've been extremely grateful to have opportunities to lead my peers
                       */}
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
                <Carousel>
                    <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Handshake}
                    alt="Handshake"
                    width="520"
                    height="390"
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
                    src={Gold}
                    alt="Gold"
                    width="520"
                    height="390"
                  /> 
                  {/* <Carousel.Caption>
                <h2>Student Engineering </h2>
                <h5>Promoted student involvement in the community through volunteering and philanthropy.</h5>
                </Carousel.Caption> */}
                  </Carousel.Item>
                <Carousel.Item>
                <img
                    className="rounded"
                    src={Blue}
                    alt="Blue"
                    width="520"
                    height="390"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={Red}
                    alt="Red"
                    width="520"
                    height="390"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={DanialPrize}
                    alt="DanialPrize"
                    width="520"
                    height="390"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={Polgar}
                    alt="Polgar"
                    width="520"
                    height="390"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Americanopen}
                    alt="Americanopen"
                    width="520"
                    height="390"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Nationals}
                    alt="Nationals"
                    width="520"
                    height="390"
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