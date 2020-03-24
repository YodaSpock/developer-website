import React from "react";
import {Row, Col} from 'antd';
//import chess from '../Images/chess.jpg';

export default class HistoryPage extends React.Component {

    //<img src = {chess} alt = {"Chess Game"} style = {{height: 300, width: 300}}/>
    render() {
        return (
            <div style = {{backgroundColor: "gray"}}>
                <Row>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                        
                    </Col>
                    <Col span = {20} style = {{backgroundColor: "lightgray", padding: "3.5%"}}>
                        Description Here
                    </Col>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                       
                    </Col>
                    <Col span = {20} style = {{backgroundColor: "lightgray", padding: "3.5%"}}>
                        Description Here
                    </Col>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                    </Col>
                </Row>
                <Row>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                        
                    </Col>
                    <Col span = {20} style = {{backgroundColor: "lightgray", padding: "3.5%"}}>
                        Description Here
                    </Col>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col span = {2} style = {{ padding: "3.5%"}}>
                        
                    </Col>
                    <Col span = {20} style = {{backgroundColor: "lightgray", padding: "3.5%"}}>
                        Description Here
                    </Col>
                    <Col span = {2} style = {{padding: "3.5%"}}>
                    </Col>
                </Row>
           </div>
        )
    }
}
