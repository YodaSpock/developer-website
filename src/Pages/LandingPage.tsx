import React from "react";
import {Menu, Typography} from 'antd';
import {HomeOutlined, FileTextOutlined, TrophyOutlined, DatabaseOutlined, FireOutlined} from '@ant-design/icons';
import OtherPage from "./OtherPage";
import ProjectPage from "./ProjectPage";
import HomePage from "./HomePage";
import ResumePage from "./ResumePage";
import DescriptionPage from "./DescriptionPage";

const {Title} = Typography;

export default class LandingPage extends React.Component {

    state = {
        current: "home",
    };

    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
        //console.log("e.key", e.key);
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
            <Title level = {2}>Isaac Spanier</Title>
            
            <Menu onClick = {this.handleClick} selectedKeys = {[this.state.current]} mode = "horizontal">
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
                Other Interests <FireOutlined />
                </Menu.Item>
            </Menu>
            {section}
            </div>
        )
    }
}
