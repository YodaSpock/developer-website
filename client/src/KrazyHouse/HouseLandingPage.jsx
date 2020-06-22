import React from 'react';
import {Link} from 'react-router-dom'
import { Input, Row, Col, Button} from 'antd';

//const {Title} = Typography;
export default class HouseLandingPage extends React.Component {

    render(){
        return(
                <Row>
                    <Col span = {8}/>
                    <Col span = {8} style = {{alignContent: "center"}}>
                        <br/>
                        <h2 style = {{textAlign: "center"}}>Sign In</h2>
                        <Input placeholder="Username" />
                        <Input placeholder="Password" />

                        <Link exact to = "/house/homepage">
                            <Button>Login</Button>
                        </Link>
                    </Col>
                    <Col span = {8}/>
                </Row>
        )
    }

}