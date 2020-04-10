import React from "react";
import {GithubFilled, LinkedinFilled, YoutubeFilled} from '@ant-design/icons';
import profile from '../Images/profile.jpg';
import "../Styles/Background.scss";
import "../Styles/Home.scss"
import {Row, Col, Divider} from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


export default class HomePage extends React.Component {

    render() {
        return (
            <div className = "backgroundHome">
            <Row style = {{paddingTop: "2vh", alignContent: "center"}}>
                <Col span = {4}/>
                <Col span = {16}>
                    <Title style = {{textAlign: "center", color: "#0C2340", fontSize: "50px"}}>Isaac J. Spanier</Title>
                </Col>
                <Col span = {4}/>
            </Row>
            <Row>
                <Col span = {6}/>
                <Col span = {12}>
                    <Title style = {{textAlign: "center", color: "#0C2340", fontSize: "30px"}}>Full Stack Developer</Title>
                </Col>
                <Col span = {6}/>
            </Row>
            <Row>
                <Col span = {10}/>
                <Col span = {4}>
                    <img src = {profile} className ="profile" alt = {"profile"} style = {{height: "100%", borderRadius: "100%", width: "100%"}}/><br/>
                </Col>
                <Col span = {10}/>
            </Row>
            
            <Row>
                <Col span = {8}/>
                <Col span = {8} style = {{textAlign: "center", fontSize: "50px"}}>
                    <a style = {{padding: "1%"}} href="https://www.linkedin.com/in/isaacspanier/">
                        <LinkedinFilled style = {{color: "blue",}}/>    
                    </a>
                    <a style = {{padding: "1%"}} href = "https://github.com/YodaSpock">
                        <GithubFilled style = {{color: "black",}}/> 
                    </a>
                    <a style = {{padding: "1%"}} href = "https://www.youtube.com/channel/UCIzt2QpLmaFUMDXETm_qWkQ" >
                        <YoutubeFilled style = {{color: "red", }}/>
                    </a>
                </Col>
                <Col span = {8}/>
            </Row>
            <Row>
                <Col span = {24}>
                    <Divider style = {{backgroundColor: "black", height: "2.5px"}}/>
                </Col>
            </Row>
            <Row>
                <Col span = {8}/>
                <Col span = {8}>
                    <Title  style= {{textAlign: "center"}}>About</Title>
                </Col>
                <Col span = {8}/>
            </Row>
            <Row>
                <Col span = {2}/>
                <Col span = {20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Col>
                <Col span = {2}/>
            </Row>
            <Row>
                <Col span = {8}/>
                <Col span = {8}>
                    <Title style= {{textAlign: "center"}}>Skills</Title>
                </Col>
                <Col span = {8}/>
            </Row>
            <Row>
                <Col span = {2}/>
                <Col span = {20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Col>
                <Col span = {2}/>
            </Row>
            </div>
        )
    }

}
