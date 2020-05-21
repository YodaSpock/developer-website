import React from "react";
import resume from '../Images/resume2.jpg';
import "../Styles/Background.scss";
import {Row, Col} from 'antd';


export default class ResumePage extends React.Component {

    render() {
        return (
            <Row className = "backgroundResume">
                <Col xs = {0} md = {5}/>
                <Col xs = {24} md = {14}>
                    <img src = {resume} alt = {"Isaac Spanier 2020 Resume"} style = {{opacity: "1", width: "100%", padding: "1%", borderRadius: "5%"}}/>
                </Col>
                <Col xs = {0} md = {5}/>
            </Row>   
        )
    }

}
