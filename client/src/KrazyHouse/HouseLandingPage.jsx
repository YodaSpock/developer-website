import React from 'react';
import {Link} from 'react-router-dom'
import { Input, Typography, Row, Col, Button} from 'antd';

const {Title} = Typography;
export default class HouseLandingPage extends React.Component {

    render(){
        return(
            <Row>
                <Col span = {8}/>
                <Col span = {8} style = {{alignContent: "center"}}>
                    <Title style = {{textAlign: "center"}}>Karla's Krazy House</Title>
                    <br/>
                    <h2 style = {{textAlign: "center"}}>Login</h2>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Link exact to = "/house/homepage">
                        <Button >Login</Button>
                    </Link>
                </Col>
                <Col span = {8}/>
            </Row>
        )
    }

}