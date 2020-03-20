import React from "react";
import {Row, Col} from 'antd';
//import chess from '../Images/chess.jpg';

export default class DescriptionPage extends React.Component {

    //<img src = {chess} alt = {"Chess Game"} style = {{height: 300, width: 300}}/>
    render() {
        return (
            <div>
                <Row>
                    <Col span = {12} style = {{backgroundColor: "lightblue"}}>
                        Description Here
                    </Col>
                    <Col span = {12} style = {{backgroundColor: "grey"}}>
                        Picture Here
                    </Col>
                </Row>
                <Row>
                    <Col span = {12} style = {{backgroundColor: "grey"}}>
                        Picture Here
                    </Col>
                    <Col span = {12} style = {{backgroundColor: "lightblue"}}>
                        Description Here
                    </Col>
                </Row>
                <Row>
                    <Col span = {12} style = {{backgroundColor: "lightblue"}}>
                        Description Here
                    </Col>
                    <Col span = {12} style = {{backgroundColor: "grey"}}>
                        Picture Here
                    </Col>
                </Row>
                <Row>
                    <Col span = {12} style = {{backgroundColor: "grey"}}>
                        Picture Here
                    </Col>
                    <Col span = {12} style = {{backgroundColor: "lightblue"}}>
                        Description Here
                    </Col>
                </Row>
           </div>
        )
    }
}
