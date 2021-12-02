import React from "react";
import {Link} from 'react-router-dom'
import chess from '../Images/chess.jpg';
import sequence from '../Images/sequence.jpg';
import euchre from '../Images/euchre.jpg';
import house from '../Images/CrazyHouse.jpg';
//import yahtzee from '../Images/yahtzee.jpg';
import spotify from '../Images/spotify.jpg';
import instagram from '../Images/instagram.jpg';
import youtube from '../Images/youtube.jpg';
import googlemaps from '../Images/googlemaps.jpg';
import unity from '../Images/unity.jpg';
import emoji from 'react-easy-emoji';

import "../Styles/Background.scss";
import "../Styles/Project.scss";

import {Row, Col, Modal} from 'antd';
import HouseLandingPage from "../KrazyHouse/HouseLandingPage";
export default class ProjectPage extends React.Component {


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
            //TODO Add Spacing between navBar and the toprow
            //TODO Fix the mobile version
            <div className = "backgroundProjects">
                <Modal
                    title = "Under Construction"
                    visible = {true}
                    footer = {[]}
                >
                </Modal>
                <Modal
                    title = "Karla's Krazy House"
                    visible = {this.state.visible}
                    onCancel = {this.handleCancel}
                    footer = {[]}
                >
                    <HouseLandingPage/>
                </Modal>
                
                {console.log(this.state.visible)}
                <Row className = "centerAlign">
                    <Col xs = {12} md = {6}>
                         <Link to="/chess">
                             <img src = {chess} alt = {"Chess Game"} className = "inprogress" />
                         </Link>
                    </Col>
                    <Col xs = {12} md = {6} className = "unfinished">
                        <img src = {sequence} alt = {"Sequence Game"} className = "inprogress" />
                    </Col>
                     <Col xs = {12} md = {6} className = "unfinished">
                        <img src = {euchre} alt = {"Euchre Game"} className = "inprogress" />
                    </Col>
                    <Col xs = {12} md = {6}>
                        <img 
                        src = {house} 
                        alt = {"Karla's Krazy House"} 
                        onClick = {this.showModal} 
                        style = {{cursor: "pointer"}}
                        className = "inprogress" 
                        />
                    </Col>
                </Row>
                <Row className = "centerAlign unfinished" style ={{paddingBottom: "2.5%"}}>
                    <Col xs = {12} md = {6}>
                        Play Chess <br/> (Under Construction)
                    </Col>
                    <Col xs = {12} md = {6}>
                        Play Sequence <br/> (Not Started Yet)
                    </Col>
                    <Col xs = {12} md = {6}>
                        Play Euchre <br/> (Not Started Yet)
                    </Col>
                    <Col xs = {12} md = {6}>
                        Karla's Krazy House {emoji('🤪')} <br/> (Under Construction)
                    </Col>
                </Row>
                <Row className = "centerAlign unfinished">
                    <Col span = {6}>
                        <img src = {spotify} alt = {"Spotify Projects"} className = "inprogress"/>
                    </Col>
                    <Col span = {6}>
                        <img src = {instagram} alt = {"Instagram Projects"} className = "inprogress"/>
                    </Col>
                    <Col span = {6}>
                        <img src = {unity} alt = {"Unity Projects"} className = "inprogress"/>
                    </Col>
                    <Col span = {6}>
                        <img src = {googlemaps} alt = {"Google Maps Projects"} className = "inprogress"/>
                    </Col>
                </Row>
                <Row className = "centerAlign" style ={{paddingBottom: "2.5%"}}>
                    <Col span = {6}>
                        Spotify Projects <br/> (Not Started Yet)
                    </Col>
                    <Col span = {6}>
                        Instagram Projects <br/> (Not Started Yet)
                    </Col>
                    <Col span = {6}>
                        Unity Projects <br/> (Not Linked Yet)
                    </Col>
                    <Col span = {6}>
                        Google Maps Projects <br/> (Not Started Yet)
                    </Col>
                </Row>
                <Row className = "centerAlign">
                    <Col xs = {12} md = {6}>
                        <a href = "https://www.youtube.com/channel/UCIzt2QpLmaFUMDXETm_qWkQ" >
                            <img src = {youtube} alt = {"Youtube Channel"} className = "inprogress" />
                        </a>
                    </Col>
                </Row>
                <Row className = "centerAlign" style ={{paddingBottom: "2.5%"}}>
                    <Col xs = {12} md = {6}>
                        Youtube Channel <br/>
                    </Col>
                </Row>
                
            </div>
        )
        //Yotube Projects
        //MINESWEEPER
        //BLACKJACK
        //TEXAS HOLDEM 
        //CHECKERS
        //CONNECT FOUR
        //BATTLESHIP
        //8 - BALL POOL GAME... AI
        //COLORING APPLICATION 
    }

}
