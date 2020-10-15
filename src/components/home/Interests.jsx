import React, { useState, useEffect, Profiler } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {
    aboutHeading,
    aboutDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } from "../../editable-stuff/configurations.json";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className="row" style={divStyle}>
               {/* <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Meditation</p>
                <img src="https://img.icons8.com/nolan/128/light.png"/>
                <p className="lead text-center">
                  Every morning, I begin my day with <a href="https://www.headspace.com/" target="_blank">Headspace</a>.
                  I started meditating about one year ago and have learned how to be more focused, mindful, and relaxed. 
                  So far, I've meditated for a total of 1,385 minutes, and I am continuing to grow this number every day!
                </p> 
                </div> */}
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/nolan/128/saving-book.png"/>
                <p className="lead text-center">
                  After quarantine began I thought with all the spare time stuck at home this would be a great opprtunity to rekindle my passion for reading. During highschool I was always frustrated because a couple of months after reading a book I always sensed my memory of even the most captivating story lines slowly fading away. 
                  Since March I have begun my journey to combat the retention gods now always reading with a pen and sticky notes in hand mindful of detailing opinions, connections to previous literature, and vocab words I haven't encountered before. Check out what I've been reading on <a href="https://www.goodreads.com/user/show/68741765-danial" target="_blank">Goodreads</a>! One of my favorite quotes: "Reading a good book in silence is like eating chocolate for the rest of your life and never getting fat." -Becca Fitzpatrick
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Tennis</p>
                <img src="https://img.icons8.com/ios-filled/100/000000/tennis-2.png"/>
                <p className="lead text-center">
                 The summer before highschool I knew I wanted to avoid PE at all costs and after playing semicompetitive ping pong for a couple years I thought tennis wouldn't be too different... Needless to say I wasn't selected to be on the team. Luckily after begging the coach to let me on the team he agreed to hold a second tryout on the condition that I practice with the girls team (as the only male) everyday after school for the rest of the semester. As I made a fool of myself in front of the entire school for 5 months, I slowly fell in love with the game and eventually worked my way onto the varsity team where I resided for all 4 years of highschool.         
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Community Service</p>
                <img src="https://img.icons8.com/ios-filled/100/000000/tennis-2.png"/>
                <p className="lead text-center">
                 The summer before highschool I knew I wanted to avoid PE at all costs and after playing semicompetitive ping pong for a couple years I thought tennis wouldn't be too different... Needless to say I wasn't selected to be on the team. Luckily after begging the coach to let me on the team he agreed to hold a second tryout on the condition that I practice with the girls team (as the only male) everyday after school for the rest of the semester. As I made a fool of myself in front of the entire school for 5 months, I slowly fell in love with the game and eventually worked my way onto the varsity team where I resided for all 4 years of highschool.         
                </p>
                </div>
                {/*
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Food</p>
                <img src="https://img.icons8.com/nolan/128/meal.png"/>
                <p className="lead text-center">
                  I am a big foodie! Growing up with a mom who cooks the best Pakistani food, I fell in love with food at an early age. I love trying new restaurants and recipes!
                </p>
                </div> */}
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
