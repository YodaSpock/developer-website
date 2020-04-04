import React from "react";
import {GithubFilled, LinkedinFilled} from '@ant-design/icons';
import profile from '../Images/profile.jpg';
import {Row, Col} from 'antd';

export default class HomePage extends React.Component {

    render() {
        return (
           <Row className = "home">
                <Col span = {2}></Col>
                <Col span = {4}>
                    <img src = {profile} className ="profile" alt = {"profile"} style = {{height: "100%", width: "100%"}}/><br/>
                </Col>
                <Col span = {12}>
                    My name is Isaac Spanier<br/>
                    I am Looking for a full time software engineering position in the Seattle Area<br/>
                    LinkedIn Page <a href="https://www.linkedin.com/in/isaacspanier/"> Here </a> <LinkedinFilled /><br/>
                    GitHub Page <a href = "https://github.com/YodaSpock"> Here </a> <GithubFilled /><br/>
                </Col>
                <Col span = {2}></Col>
           </Row>
        )
    }

}
