import React from "react";
import {Divider, Typography, Row, Col} from "antd";
import starWars from '../Images/StarWarsAdam.jpg';
import billiards from '../Images/billiardsclub.jpg';

import "../Styles/Other.scss";
import "../Styles/Background.scss";
const { Title } = Typography;

export default class OtherPage extends React.Component {

    render() {
        return (
            <Row className = "backgroundOther">
                <Col span = {24}>
                    <Title style ={{textAlign: "center"}}>STAR WARS</Title><br/>
                    <Row>
                        <Col span = {6}>
                            <img src = {starWars} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                </Col>
                <Col span = {24}>
                    <Title style ={{textAlign: "center"}}>BILLIARDS</Title> <br/>
                    <Row>
                        <Col span = {6}>
                            <img src = {starWars} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                </Col>
                <Col span = {24}>
                    <Title style ={{textAlign: "center"}}>CHOIR</Title> <br/>
                    <Row>
                        <Col span = {6}>
                            <img src = {starWars} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Col>
                    </Row>
                    <Divider style = {{backgroundColor: "black"}} />
                </Col>
                <Col span = {24}>
                    <Title style ={{textAlign: "center"}}>BOARD GAMES</Title><br/>
                    <Row>
                        <Col span = {6}>
                            <img src = {starWars} alt = {"StarWars"} className = "starwars" />
                        </Col>
                        <Col span = {18}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

}
