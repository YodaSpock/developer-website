import React from "react";
import resume from '../Images/resume3.jpg';
//import pdf from "../Images/Resume.pdf";
import "../Styles/Background.scss";
import {Row, Col} from 'antd';


export default class ResumePage extends React.Component {

    render() {
        return (
            <div className = "backgroundResume">
            {/* <Row style = {{paddingTop: "10px", textAlign: "center", justifyContent: "center"}}>
                <Col x = {24} md = {14}>
                    <Button href = "/client/src/Images/Resume.pdf" download>
                        Download Resume
                    </Button>
                    <a href = "Resume.pdf" download>Resume </a>
                </Col>
            </Row> */}
            <Row >
                <Col xs = {0} md = {5}/>
                <Col xs = {24} md = {14}>
                    <img src = {resume} alt = {"Isaac Spanier 2020 Resume"} style = {{opacity: "1", width: "100%", padding: "1%", borderRadius: "5%"}}/>
                </Col>
                <Col xs = {0} md = {5}/>
            </Row>   
            </div>
        )
    }

}
