import React from "react";
import {GithubFilled, LinkedinFilled, YoutubeFilled} from '@ant-design/icons';
import profile from '../Images/profile.jpg';
import "../Styles/Background.scss";
import "../Styles/Home.scss"
import {Row, Col, Divider} from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


export default class HomePage extends React.Component {

    render() {
        return (
            <div className = "backgroundHome">
            <Row style = {{paddingTop: "2vh", alignContent: "center"}}>
                <Col xs = {1} md = {4}/>
                <Col xs = {22} md = {16}>
                    <Title style = {{textAlign: "center", color: "#0C2340", fontSize: "50px"}}>Isaac J. Spanier</Title>
                </Col>
                <Col xs = {1} md = {4}/>
            </Row>
            <Row>
                <Col xs = {1} md = {6}/>
                <Col xs = {22} md = {12}>
                    <Title style = {{textAlign: "center", color: "#0C2340", fontSize: "30px"}}>Computer Engineering Student</Title>
                </Col>
                <Col xs = {1} md = {6}/>
            </Row>
            <Row>
                <Col xs = {7} md = {8} lg = {8} xl = {10}/>
                <Col xs = {10} md = {8} lg = {8} xl = {4}>
                    <img src = {profile} className ="profile" alt = {"profile"} style = {{height: "100%", borderRadius: "100%", width: "100%"}}/><br/>
                </Col>
                <Col xs = {7} md = {8} lg = {8} xl = {10}/>
            </Row>
            
            <Row>
                <Col xs = {2} span = {8}/>
                <Col xs = {20} span = {8} style = {{textAlign: "center", fontSize: "50px"}}>
                    <a style = {{padding: "1%"}} href="https://www.linkedin.com/in/isaacspanier/">
                        <LinkedinFilled style = {{color: "blue",}}/>    
                    </a>
                    <a style = {{padding: "1%"}} href = "https://github.com/YodaSpock">
                        <GithubFilled style = {{color: "black",}}/> 
                    </a>
                    <a style = {{padding: "1%"}} href = "https://www.youtube.com/channel/UCIzt2QpLmaFUMDXETm_qWkQ" >
                        <YoutubeFilled style = {{color: "red", }}/>
                    </a>
                </Col>
                <Col xs = {2} span = {8}/>
            </Row>

            <Row>
                <Col xs = {2} span = {8}/>
                <Col xs = {20} span = {8} style = {{textAlign: "center", color: "black", fontSize: "18px"}}>
                    Phone: 815-980-2527
                </Col>
                <Col xs = {2} span = {8}/>
            </Row>
            <Row>
                <Col xs = {2} span = {8}/>
                <Col xs = {20} span = {8} style = {{textAlign: "center", color: "black", fontSize: "18px"}}>
                    Email: isaac.spanier@gmail.com
                </Col>
                <Col xs = {2} span = {8}/>
            </Row>
            <Row>
                <Col span = {24}>
                    <Divider style = {{backgroundColor: "black", height: "2.5px"}}/>
                </Col>
            </Row>
            <Row>
                <Col span = {8}/>
                <Col span = {8}>
                    <Title  style= {{textAlign: "center"}}>About</Title>
                </Col>
                <Col span = {8}/>
            </Row>
            <Row>
                <Col span = {2}/>
                <Col span = {20} style = {{fontSize:"17px"}}>
                    My name is Isaac Spanier, and thanks for taking the time to look around at my website, it. 
                    I am originally from Rockford, Illinois and moved to Iowa to start my Bachelor's degree as a Computer Science major 
                    at Iowa State University to pursue my passion of problem and puzzle solving. 
                    After one semester I switched to Computer Engineering to challenge myself and learn more than just the software side 
                    of computers and to gain a broader view of my field. What initially drew me to the Computer field was the idea of so many
                    opportunites and so many things to learn, and it made sense to switch to major that gave I am generally fun loving guy that really enjoys learning
                    new things and putting myself in new situations. I specialize in web development as a programmer but I have the ability 
                    to work in any programming field as I have tried to expose myself and learn a little bit about everything. 
                </Col>
                <Col span = {2}/>
            </Row>
            <Row>
                <Col span = {8}/>
                <Col span = {8}>
                    <Title style= {{textAlign: "center"}}>Skills</Title>
                </Col>
                <Col span = {8}/>
            </Row>
            <Row>
                <Col span = {2}/>
                <Col span = {20} style = {{fontSize:"17px"}}>
                    Languages - HTML, CSS, JavaScript, TypeScript, React.JS, Java, C, C++, Python, SQL, JSP, .NET Framework, Verilog, and Assembly
                    <br/>
                    Operating Systems/Tools - Windows, Mac, Linux, VisualStudio, VSCode, Atom, IntelliJ, Eclipse, GitLab,
                    GitHub, Quartus Prime, VirtualBox, SolidWorks, KiCad
                    <br/>
                    Concepts - Source Control, Data Structures, Databases, Object-Oriented Programming, Networking, PCB Design
                    <br/>
                    <br/>
                </Col>
                <Col span = {2}/>
            </Row>
            </div>
        )
    }

}
