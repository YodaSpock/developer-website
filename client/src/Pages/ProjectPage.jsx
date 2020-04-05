import React from "react";
import {Link} from 'react-router-dom'
import chess from '../Images/chess.jpg';
import sequence from '../Images/sequence.jpg';
import euchre from '../Images/euchre.jpg';
//import yahtzee from '../Images/yahtzee.jpg';
import spotify from '../Images/spotify.jpg';
import instagram from '../Images/instagram.jpg';
import youtube from '../Images/youtube.jpg';
import googlemaps from '../Images/googlemaps.jpg';
import unity from '../Images/unity.jpg';

import "../Styles/Project.scss";
import {Row, Col} from 'antd';
export default class ProjectPage extends React.Component {

    render() {
        return (
            <div>
                <Row className = "centerAlign">
                    <Col span = {6}>
                         <Link to="/chess">
                             <img src = {chess} alt = {"Chess Game"} className = "inprogress" />
                         </Link>
                    </Col>
                    <Col span = {6}>
                        <img src = {sequence} alt = {"Sequence Game"} className = "unfinished" />
                    </Col>
                     <Col span = {6}>
                        <Link to ="/euchre">
                              <img src = {euchre} alt = {"Euchre Game"} className = "unfinished" />
                        </Link>
                    </Col>
                    <Col span = {6}>
                        <a href = "https://www.youtube.com/channel/UCIzt2QpLmaFUMDXETm_qWkQ" >
                            <img src = {youtube} alt = {"Youtube Channel"} className = "inprogress" />
                        </a>
                    </Col>
                </Row>
                <Row className = "centerAlign" style ={{paddingBottom: "2.5%"}}>
                    <Col span = {6}>
                        Play Chess
                    </Col>
                    <Col span = {6}>
                        Play Sequence
                    </Col>
                    <Col span = {6}>
                        Play Euchre
                    </Col>
                    <Col span = {6}>
                        YouTube Channel
                    </Col>
                </Row>
                <Row className = "centerAlign">
                    <Col span = {6}>
                        <img src = {spotify} alt = {"Spotify Projects"} className = "unfinished"/>
                    </Col>
                    <Col span = {6}>
                        <img src = {instagram} alt = {"Instagram Projects"} className = "unfinished"/>
                    </Col>
                    <Col span = {6}>
                        <img src = {unity} alt = {"Unity Projects"} className = "unfinished"/>
                    </Col>
                    <Col span = {6}>
                        <img src = {googlemaps} alt = {"Google Maps Projects"} className = "unfinished"/>
                    </Col>
                </Row>
                <Row className = "centerAlign" style ={{paddingBottom: "2.5%"}}>
                    <Col span = {6}>
                        Spotify Projects
                    </Col>
                    <Col span = {6}>
                        Instagram Projects
                    </Col>
                    <Col span = {6}>
                        Unity Projects
                    </Col>
                    <Col span = {6}>
                        Google Maps Projects
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
