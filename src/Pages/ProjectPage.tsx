import React from "react";
import chess from '../Images/chess.jpg';
import sequence from '../Images/sequence.jpg';
import euchre from '../Images/euchre.jpg';
import yahtzee from '../Images/yahtzee.jpg';
import {Row, Col} from 'antd';
export default class ProjectPage extends React.Component {

    render() {
        return (
            <div>
           <Row>
               <Col span = {6}>
                    <img src = {chess} alt = {"Chess Game"} style = {{height: "100%", width: "60%"}}/>
               </Col>
               <Col span = {6}>
                    <img src = {sequence} alt = {"Sequence Game"} style = {{height: "100%", width: "60%"}}/>
               </Col>
               <Col span = {6}>
                    <img src = {euchre} alt = {"Euchre Game"} style = {{height: "100%", width: "60%"}}/>
               </Col>
               <Col span = {6}>
                    <img src = {yahtzee} alt = {"Yahtzee Game"} style = {{height: "100%", width: "60%"}}/>
               </Col>
            </Row>
            <Row>
                <Col span = {6}>
                    PLAY CHESS
                </Col>
                <Col span = {6}>
                    PLAY SEQUENCE
                </Col>
                <Col span = {6}>
                    PLAY EUCHRE
                </Col>
                <Col span = {6}>
                    PLAY YAHTZEE
                </Col>
            </Row>
        </div>
        )
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
