import React from "react";

import {Divider, Typography, Row, Col} from "antd";
import starWars from '../Images/StarWarsAdam2.jpg';
import billiards from '../Images/billiardsclub.jpg';
import choir from '../Images/CarnegieHall.jpg';
import games from '../Images/BoardGames.jpg';

import "../Styles/Other.scss";
import "../Styles/Background.scss";
const { Title } = Typography;

export default class OtherPage extends React.Component {

    render() {
        return (
            <div className = "backgroundOther">
                    <Row>
                        <Col span = {6}>
                            <img src = {starWars} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>STAR WARS</Title><br/>
                            <div className = "text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    <Row>
                        <Col span = {6}>
                            <img src = {billiards} alt = {"Billiards"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>BILLIARDS</Title> <br/>
                            <div className = "text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    <Row>
                        <Col span = {6}>
                            <img src = {choir} alt = {"Choir"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>CHOIR</Title> <br/>
                            <div className = "text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                    <Row>
                        <Col span = {6}>
                            <img src = {games} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                            <Title style ={{textAlign: "left"}}>BOARD GAMES</Title><br/>
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
