import React from "react";
//import {useSpring, animated} from 'react-spring';

import {Divider, Typography, Row, Col} from "antd";
//import starWars from '../Images/StarWarsAdam2.jpg';
import billiards from '../Images/billiardsclub.jpg';
import choir from '../Images/CarnegieHall.jpg';
import games from '../Images/BoardGames.jpg';

import "../Styles/Other.scss";
import "../Styles/Background.scss";
import HelloThere from './HelloThere'
const { Title } = Typography;

export default class OtherPage extends React.Component {

    render() {
        return (
            <div className = "backgroundOther">
                    {/* Add lightsaber cursor here */}
                    <Row className = "swRow">
                        <Col span = {6}>
                            <HelloThere/>
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>STAR WARS</Title>
                            <div className = "text">
                            I have been a huge Star Wars fan since seeing Attack of Clones in the theaters in 2002 where I was enamored with the wild 
                            fantasy and it became a big part of my life. I am huge fan of the Prequel movies, and The Clone Wars TV show. I regularly
                            quote the movies in my day to day life, and enjoy talking theories and opinions about the unverise. My favorite characters 
                            is the old Jedi Grand Master Yoda, and I named my programming tutorial channel after him, Coding With Yoda. 
                            The picture to my left is me with my good friend Adam who is one of few people
                            I consider to be a bigger Star Wars fan than myself. 
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    {/* Add billiards ball cursor here */}
                    <Row className = "billiardsRow">
                        <Col span = {6}>
                            <img src = {billiards} alt = {"Billiards"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>BILLIARDS</Title>
                            <div className = "text" >
                            I grew up only playing pool when I went to my grandparent's house which was only once a month but it sparked my love 
                            of the game
                            from an early age. Once coming to Iowa State I quickly found and became a part of the Billiards Club, where I was 
                            the Vice President
                            for both my sophmore and junior years, where I learned more about the game and learned more about the game and 
                            drastically improved 
                            my skills. I was elected as the president of the club my senior year and I inherited all the responsibilities of 
                            looking over the 30+
                            members that showed up on a weekly basis. The best part of being president was coming up with weekly challenge/trick 
                            shots to improve
                            club member's skills. It was fun to experiment and really press my skills and watch others succeed in difficult shots 
                            and seeing the 
                            joy that brought them. 
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    {/* Add music note cursor here */}
                    <Row className = "choirRow">
                        <Col span = {6}>
                            <img src = {choir} alt = {"Choir"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>CHOIR</Title>
                            <div className = "text">
                            <p>
                            In High School my Cross Country really pushed me to join choir because I really enjoyed singing just for fun
                            at practice. I finally
                            joined choir my sophmore year and I really enjoyed it, and it slowly became a very special part of my life. 
                            I was placed at the lowest
                            vocal part of Bass 2 and I found my nitch. I joined an accapella group my senior year of high school and 
                            really began to take it seriously. 
                            </p>
                            <p>
                            Then when I came to Iowa State I joined the Iowa Statesmen all male choral group of around 150 guys. We had many 
                            tours out into Iowa, and had roughly 4 concerts a year that really took up a lot of time for practice, rehearsal, 
                            and concerts. After 3 years we had our biggest concert where we flew to New York City and performed our Masterworks
                            piece in Carnegie Hall. It was amazing to perform for such a large audience in such a big venue and amazing to
                            explore the city of New York. My Senior Year I was elected as the President of Iowa Statesmen, it was such a huge
                            honor and I was really excited about the opportunity. I believe we did a great job of planning events from a 
                            full choir bowling event to blacklight dodgeball and capture the flag. I love choir so much and I was so happy I was
                            able to give back to the great choir I was apart of, and I'm very sad to have to leave. 
                            </p>
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    {/* Add dice cursor here */}
                    <Row className = "gamesRow">
                        <Col span = {6}>
                            <img src = {games} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>BOARD GAMES</Title>
                            <div className = "text">
                            Board Games are an essiential part of my life, and I cannot learn enough games quick enough. I love plyaing board games
                            with my friends and with my girlfriend. Some of my favorite games include Catan, 7 Wonders, Betrayal at House on the Hill,
                            Secret Hitler, Machi Koro, CLANK, and Splendor. 
                            I think this might be favorite thing to do in my off time and I am always looking for new games to learn and play.  
                            </div>
                        </Col>
                    </Row>
            </div>
        )
    }

}
