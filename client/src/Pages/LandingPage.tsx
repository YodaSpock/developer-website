import React from "react";
import {Menu, Typography} from 'antd';
import {HomeOutlined, FileTextOutlined, TrophyOutlined, DatabaseOutlined, FireOutlined} from '@ant-design/icons';
import OtherPage from "./OtherPage";
import ProjectPage from "./ProjectPage";
import HomePage from "./HomePage";
import ResumePage from "./ResumePage";
import DescriptionPage from "./DescriptionPage";
import {Row, Col} from 'antd';
//import billiardsBanner from '../Images/pool.jpg';
import "../Styles/Image.scss";
const {Title} = Typography;
export default class LandingPage extends React.Component {

    state = {
        current: "home",
    };

    //test

    handleClick = (e: any) => {
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
            case "descriptions":
                section = <DescriptionPage/>;
                break;
            case "projects":    
                section = <ProjectPage/>;
                break;
            case "other":
                section = <OtherPage/>;
                break;
        }
        return (
            <div>
                
            <Row className = "banner-name">
                <Col>
                    <Title style = {{color: "#1890FF"}} className ="banner-title">Isaac J Spanier</Title>
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
                        <Menu.Item key = "descriptions">
                        Project Descriptions <DatabaseOutlined />
                        </Menu.Item>
                        <Menu.Item key = "projects">
                        Fun Projects <TrophyOutlined/>
                        </Menu.Item>
                        <Menu.Item key = "other">
                        Other Interests<FireOutlined/>
                        </Menu.Item>
                    </Menu>
                    
                </Col>
            </Row>
            {section}
            </div>
        )
    }
}
