import React from "react";
import {Menu, Typography} from 'antd';
import {HomeOutlined, FileTextOutlined, ExperimentOutlined, LaptopOutlined, PictureOutlined} from '@ant-design/icons';
import OtherPage from "./OtherPage";
import HistoryPage from "./HistoryPage";
import HomePage from "./HomePage";
import ResumePage from "./ResumePage";
import ProjectPage from "./ProjectPage";
import {Row, Col} from 'antd';
import "../Styles/Image.scss";
const {Title} = Typography;
export default class LandingPage extends React.Component {

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
        let section; 
        switch(this.state.current){
            case "home":
                section = <HomePage/>;
                break;
            case "resume":
                section = <ResumePage/>;
                break;
            case "projects":
                section = <ProjectPage/>;
                break;
            case "history":    
                section = <HistoryPage/>;
                break;
            case "other":
                section = <OtherPage/>;
                break;
            default:
                section = <HomePage/>;
        }
        return (
            <div>
                
            <Row className = "banner-name">
                <Col>
                    <Title style = {{color: "white"}} className ="banner-title">Isaac J Spanier</Title>
                </Col>
            </Row>
            <Row className = "menu-row">
                <Col>
                    <Menu className = "menu-bar" style = {{textAlign: "center", padding: "auto"}}onClick = {this.handleClick} selectedKeys = {[this.state.current]} mode = "horizontal">
                        <Menu.Item key = "home">
                        Home <HomeOutlined/>
                        </Menu.Item>
                        <Menu.Item key = "resume">
                        Resume <FileTextOutlined/>
                        </Menu.Item>
                        <Menu.Item key = "history">
                        Work History <LaptopOutlined />
                        </Menu.Item>
                        <Menu.Item key = "projects">
                        Side Projects <ExperimentOutlined/>
                        </Menu.Item>
                        <Menu.Item key = "other">
                        Other Interests <PictureOutlined/>
                        </Menu.Item>
                    </Menu>
                    
                </Col>
            </Row>
            {section}
            </div>
        )
    }
}
