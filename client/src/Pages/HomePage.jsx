import React from "react";
import {GithubFilled, LinkedinFilled, YoutubeFilled} from '@ant-design/icons';
import profile from '../Images/profile.jpg';
import "../Styles/Background.scss";
import "../Styles/Home.scss"
import {Row, Col, Divider} from 'antd';
import { Typography, Button, Modal } from 'antd';
import CountdownPage from "./CountdownPage";


const { Title } = Typography;

export default class HomePage extends React.Component {

    state = {visible: false};

    showModal = () =>{
        this.setState({
            visible: true,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    render() {
        return (
            <div className = "backgroundHome">
                <Modal
                    style ={{minWidth: "700px"}}
                    visible = {this.state.visible}
                    onCancel = {this.handleCancel}
                    footer = {[]}
                >
                    <CountdownPage>

                    </CountdownPage>
                </Modal>
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
                    <Title style = {{textAlign: "center", color: "#0C2340", fontSize: "30px"}}>B.S. in Computer Engineering</Title>
                </Col>
                <Col xs = {1} md = {6}/>
            </Row>
            <Row>
                <Col xs = {7} md = {8} lg = {8} xl = {10}/>
                <Col xs = {10} md = {8} lg = {8} xl = {4}>
                    <div class = "flip-profile">
                        {/* TODO - Add better image for the back */}
                        <div class = "flip-profile-front">
                            <img src = {profile} className ="profile" alt = {"profile"}/><br/>
                        </div>
                        {/* <div class = "flip-profile-back">
                            <img src = {profile} className ="profile" alt = {"profile"}/><br/>
                        </div> */}
                    </div>
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
            <Row style = {{display: "flex", justifyContent: "center", paddingTop: "5px"}}>
                <Button type = "primary" danger onClick={this.showModal}>
                    For Rachel
                </Button>
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
                <Col span = {20} style = {{fontSize:"17px", textAlign: "justify"}}>
                    My name is Isaac Spanier, and thanks for taking the time to look around at my website. 
                    I am originally from Rockford, Illinois and moved to Iowa to start my Bachelor's degree as a Computer Science major 
                    at Iowa State University to pursue my passion of problem and puzzle solving. 
                    After one semester I switched to Computer Engineering to challenge myself and learn more than just the software side 
                    of computers and to gain a broader view of my field. What initially drew me to the computer field was the idea of so many
                    opportunites and so many things to learn. I pride myslef in having the ability 
                    to work with any programming language or framework as I have tried to expose myself and learn a little bit about everything. 
                    I enjoy learning new things and I strive to always be learning and improving. 
                    As of this May 2020 I graduated with my Bachelor of Science in Computer Engineering and I am currently looking for a full time position.
                </Col>
                <Col span = {2}/>
            </Row>
            <Row>
                <Col span = {24}>
                    <Divider style = {{backgroundColor: "black", height: "2.5px"}}/>
                </Col>
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
