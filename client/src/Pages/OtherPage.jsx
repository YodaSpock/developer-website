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
                    <Row>
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
                    <Row>
                        <Col span = {6}>
                            <img src = {billiards} alt = {"Billiards"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>BILLIARDS</Title>
                            <div className = "text" >
                            I grew up only playing pool when I went to my grandparent's house which was only once a month but it sparked my love of the game
                            from an early age. Once coming to Iowa State I quickly found and became a part of the Billiards Club, where I was the Vice President
                            for both my sophmore and junior years, where I learned more about the game and learned more about the game and drastically improved 
                            my skills. I was elected as the president of the club my senior year and I inherited all the responsibilities of looking over the 30+
                            members that showed up on a weekly basis. The best part of being president was coming up with weekly challenge/trick shots to improve
                            club member's skills. It was fun to experiment and really press my skills and watch others succeed in difficult shots and seeing the 
                            joy that brought them. 
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    {/* Add music note cursor here */}
                    <Row>
                        <Col span = {6}>
                            <img src = {choir} alt = {"Choir"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>CHOIR</Title>
                            <div className = "text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    {/* Add dice cursor here */}
                    <Row>
                        <Col span = {6}>
                            <img src = {games} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>BOARD GAMES</Title>
                            <div className = "text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Col>
                    </Row>
            </div>
        )
    }

}
