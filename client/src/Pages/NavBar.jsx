import React from "react";
import {Menu, Typography} from 'antd';
import {HomeOutlined, FileTextOutlined, ExperimentOutlined, LaptopOutlined, PictureOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import "../Styles/Image.scss";

const {Title} = Typography;
export default class NavBar extends React.Component {

    state = {
        current: "home",
    };

    //test

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

      render() {
        return (
            <div>
                
            <Row className = "banner-name">
                <Col>
                    <Title style = {{color: "white"}} className ="banner-title">Isaac J. Spanier</Title>
                </Col>
            </Row>
            <Row className = "menu-row">
                <Col>
                    <Menu className = "menu-bar" style = {{textAlign: "center", padding: "auto"}}onClick = {this.handleClick} selectedKeys = {[this.state.current]} mode = "horizontal">
                        <Menu.Item key = "home">
                        Home <HomeOutlined/>
                        <Link to="/"/>
                        </Menu.Item>
                        <Menu.Item key = "resume">
                        Resume <FileTextOutlined/>
                        <Link to="/resume"/>
                        </Menu.Item>
                        <Menu.Item key = "history">
                        Work History <LaptopOutlined />
                        <Link to="/history"/>
                        </Menu.Item>
                        <Menu.Item key = "projects">
                        Side Projects <ExperimentOutlined/>
                        <Link to="/projects"/>
                        </Menu.Item>
                        <Menu.Item key = "other">
                        Other Interests <PictureOutlined/>
                        <Link to="/other"/>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            {console.log(this.state.current)}
            </div>
        )
    }
}
