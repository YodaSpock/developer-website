import React from "react";
import {GithubFilled, LinkedinFilled, YoutubeFilled} from '@ant-design/icons';
import profile from '../Images/profile.jpg';
import "../Styles/Background.scss";
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
                <Col span = {10}/>
                <Col span = {4}>
                    <img src = {profile} className ="profile" alt = {"profile"} style = {{height: "100%", borderRadius: "100%", width: "100%"}}/><br/>
                </Col>
                <Col span = {10}/>
            </Row>
            <Row>
                <Col span = {8}/>
                <Col span = {8} style = {{textAlign: "center", fontSize: "50px"}}>
                <LinkedinFilled style = {{color: "blue",}}/>
                <GithubFilled style = {{color: "black",}}/>
                <YoutubeFilled style = {{color: "red", }}/>
                    
                </Col>
                <Col span = {8}/>
           </Row>
            <Row>
                <Col span = {24}>
                    <Divider style = {{backgroundColor: "black", height: "2.5px"}}/>
                </Col>
           </Row>
           <Row>
                
           </Row>
           </div>
        )
    }

}
