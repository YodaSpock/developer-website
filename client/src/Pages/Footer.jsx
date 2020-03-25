import React from "react";
import {Row, Col} from 'antd';
import "../Styles/Footer.scss";

export default class Footer extends React.Component{

    render(){
        return(
            <div>
                <Row className = "footer-row">
                    <Col>
                    FOOT
                    </Col>
                </Row>
            </div>
        )
    }
}