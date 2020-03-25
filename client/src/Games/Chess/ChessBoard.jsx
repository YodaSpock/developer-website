import React from 'react';
import {Row, Col} from 'antd';
import "../../Styles/ChessBoard.scss"

export default class ChessBoard extends React.Component{
    render(){
        return(
            <div className = "chessBoard">
                <Row>
                    <Col>
                        <h1>Let's Play Chess</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "a-left" className = "left-number">
                    </Col>
                    <Col id = "a-top" className = "topLetter" >
                    <h1>A</h1>
                    </Col>
                    <Col id = "b-top" className = "topLetter" >
                    <h1>B</h1>
                    </Col>
                    <Col id = "c-top" className = "topLetter" >
                    <h1>C</h1>
                    </Col>
                    <Col id = "d-top" className = "topLetter" >
                    <h1>D</h1>
                    </Col>
                    <Col id = "e-top" className = "topLetter">
                    <h1>E</h1>
                    </Col>
                    <Col id = "f-top" className = "topLetter" >
                    <h1>F</h1>
                    </Col>
                    <Col id = "g-top" className = "topLetter" >
                    <h1>G</h1>
                    </Col>
                    <Col id = "h-top" className = "topLetter" >
                    <h1>H</h1>
                    </Col>
                    <Col id = "a-right" className = "right-number">
                    </Col>
                </Row>
                <Row>
                    <Col id = "8-left" className = "left-number">
                    <h1>8</h1>
                    </Col>
                    <Col id = "a8" className = "whiteSquare" >
                    <h1>A8</h1>
                    </Col>
                    <Col id = "b8" className = "blackSquare" >
                    <h1 className = "whiteText">B8</h1>
                    </Col>
                    <Col id = "c8" className = "whiteSquare" >
                    <h1>C8</h1>
                    </Col>
                    <Col id = "d8" className = "blackSquare" >
                    <h1 className = "whiteText">D8</h1>
                    </Col>
                    <Col id = "e8" className = "whiteSquare" >
                    <h1>E8</h1>
                    </Col>
                    <Col id = "f8" className = "blackSquare" >
                    <h1 className = "whiteText">F8</h1>
                    </Col>
                    <Col id = "g8" className = "whiteSquare" >
                    <h1>G8</h1>
                    </Col>
                    <Col id = "h8" className = "blackSquare" >
                    <h1 className = "whiteText">H8</h1>
                    </Col>
                    <Col id = "8-right" className = "right-number">
                    <h1>8</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "7-left" className = "left-number">
                    <h1>7</h1>
                    </Col>
                    <Col id = "a7" className = "blackSquare" >
                    <h1 className = "whiteText">A7</h1>
                    </Col>
                    <Col id = "b7" className = "whiteSquare" >
                    <h1>B7</h1>
                    </Col>
                    <Col id = "c7" className = "blackSquare" >
                    <h1 className = "whiteText">C7</h1>
                    </Col>
                    <Col id = "d7" className = "whiteSquare" >
                    <h1 >D7</h1>
                    </Col>
                    <Col id = "e7" className = "blackSquare" >
                    <h1 className = "whiteText">E7</h1>
                    </Col>
                    <Col id = "f7" className = "whiteSquare" >
                    <h1 >F7</h1>
                    </Col>
                    <Col id = "g7" className = "blackSquare" >
                    <h1 className = "whiteText">G7</h1>
                    </Col>
                    <Col id = "h7" className = "whiteSquare" >
                    <h1 >H7</h1>
                    </Col>
                    <Col id = "7-right" className = "right-number">
                    <h1>7</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "6-left" className = "right-left">
                    <h1>6</h1>
                    </Col>
                    <Col id = "a6" className = "whiteSquare" >
                    <h1>A6</h1>
                    </Col>
                    <Col id = "b6" className = "blackSquare" >
                    <h1 className = "whiteText">B6</h1>
                    </Col>
                    <Col id = "c6" className = "whiteSquare" >
                    <h1>C6</h1>
                    </Col>
                    <Col id = "d6" className = "blackSquare" >
                    <h1 className = "whiteText">D6</h1>
                    </Col>
                    <Col id = "e6" className = "whiteSquare" >
                    <h1>E6</h1>
                    </Col>
                    <Col id = "f6" className = "blackSquare" >
                    <h1 className = "whiteText">F6</h1>
                    </Col>
                    <Col id = "g6" className = "whiteSquare" >
                    <h1>G6</h1>
                    </Col>
                    <Col id = "h6" className = "blackSquare" >
                    <h1 className = "whiteText">H6</h1>
                    </Col>
                    <Col id = "6-right" className = "right-number">
                    <h1>6</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "5-left" className = "left-number">
                    <h1>5</h1>
                    </Col>
                    <Col id = "a5" className = "blackSquare" >
                    <h1 className = "whiteText">A5</h1>
                    </Col>
                    <Col id = "b5" className = "whiteSquare" >
                    <h1>B5</h1>
                    </Col>
                    <Col id = "c5" className = "blackSquare" >
                    <h1 className = "whiteText">C5</h1>
                    </Col>
                    <Col id = "d5" className = "whiteSquare" >
                    <h1 >D5</h1>
                    </Col>
                    <Col id = "e5" className = "blackSquare" >
                    <h1 className = "whiteText">E5</h1>
                    </Col>
                    <Col id = "f5" className = "whiteSquare" >
                    <h1 >F5</h1>
                    </Col>
                    <Col id = "g5" className = "blackSquare" >
                    <h1 className = "whiteText">G5</h1>
                    </Col>
                    <Col id = "h5" className = "whiteSquare" >
                    <h1 >H5</h1>
                    </Col>
                    <Col id = "5-right" className = "right-number">
                    <h1>5</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "4-left" className = "left-number">
                    <h1>4</h1>
                    </Col>
                    <Col id = "a4" className = "whiteSquare" >
                    <h1>A4</h1>
                    </Col>
                    <Col id = "b4" className = "blackSquare" >
                    <h1 className = "whiteText">B4</h1>
                    </Col>
                    <Col id = "c4" className = "whiteSquare" >
                    <h1>C4</h1>
                    </Col>
                    <Col id = "d4" className = "blackSquare" >
                    <h1 className = "whiteText">D4</h1>
                    </Col>
                    <Col id = "e4" className = "whiteSquare" >
                    <h1>E4</h1>
                    </Col>
                    <Col id = "f4" className = "blackSquare" >
                    <h1 className = "whiteText">F4</h1>
                    </Col>
                    <Col id = "g4" className = "whiteSquare" >
                    <h1>G4</h1>
                    </Col>
                    <Col id = "h4" className = "blackSquare" >
                    <h1 className = "whiteText">H4</h1>
                    </Col>
                    <Col id = "4-right" className = "right-number">
                    <h1>4</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "3-left" className = "left-number">
                    <h1>3</h1>
                    </Col>
                    <Col id = "a3" className = "blackSquare" >
                    <h1 className = "whiteText">A3</h1>
                    </Col>
                    <Col id = "b3" className = "whiteSquare" >
                    <h1>B3</h1>
                    </Col>
                    <Col id = "c3" className = "blackSquare" >
                    <h1 className = "whiteText">C3</h1>
                    </Col>
                    <Col id = "d3" className = "whiteSquare" >
                    <h1 >D3</h1>
                    </Col>
                    <Col id = "e3" className = "blackSquare" >
                    <h1 className = "whiteText">E3</h1>
                    </Col>
                    <Col id = "f3" className = "whiteSquare" >
                    <h1 >F3</h1>
                    </Col>
                    <Col id = "g3" className = "blackSquare" >
                    <h1 className = "whiteText">G3</h1>
                    </Col>
                    <Col id = "h3" className = "whiteSquare" >
                    <h1 >H3</h1>
                    </Col>
                    <Col id = "3-right" className = "right-number">
                    <h1>3</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "2-left" className = "left-number">
                    <h1>2</h1>
                    </Col>
                    <Col id = "a2" className = "whiteSquare" >
                    <h1>A2</h1>
                    </Col>
                    <Col id = "b2" className = "blackSquare" >
                    <h1 className = "whiteText">B2</h1>
                    </Col>
                    <Col id = "c2" className = "whiteSquare" >
                    <h1>C2</h1>
                    </Col>
                    <Col id = "d2" className = "blackSquare" >
                    <h1 className = "whiteText">D2</h1>
                    </Col>
                    <Col id = "e2" className = "whiteSquare" >
                    <h1>E2</h1>
                    </Col>
                    <Col id = "f2" className = "blackSquare" >
                    <h1 className = "whiteText">F2</h1>
                    </Col>
                    <Col id = "g2" className = "whiteSquare" >
                    <h1>G2</h1>
                    </Col>
                    <Col id = "h2" className = "blackSquare" >
                    <h1 className = "whiteText">H2</h1>
                    </Col>
                    <Col id = "2-right" className = "right-number">
                    <h1>2</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "1-left" className = "left-number">
                    <h1>1</h1>
                    </Col>
                    <Col id = "a1" className = "blackSquare" >
                    <h1 className = "whiteText">A1</h1>
                    </Col>
                    <Col id = "b1" className = "whiteSquare" >
                    <h1>B1</h1>
                    </Col>
                    <Col id = "c1" className = "blackSquare" >
                    <h1 className = "whiteText">C1</h1>
                    </Col>
                    <Col id = "d1" className = "whiteSquare" >
                    <h1 >D1</h1>
                    </Col>
                    <Col id = "e1" className = "blackSquare" >
                    <h1 className = "whiteText">E1</h1>
                    </Col>
                    <Col id = "f1" className = "whiteSquare" >
                    <h1 >F1</h1>
                    </Col>
                    <Col id = "g1" className = "blackSquare" >
                    <h1 className = "whiteText">G1</h1>
                    </Col>
                    <Col id = "h1" className = "whiteSquare" >
                    <h1 >H1</h1>
                    </Col>
                    <Col id = "1-right" className = "right-number">
                    <h1>1</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id = "a-left" className = "left-number">
                    </Col>
                    <Col id = "a-bottom" className = "bottomLetter" >
                    <h1>A</h1>
                    </Col>
                    <Col id = "b-bottom" className = "bottomLetter" >
                    <h1>B</h1>
                    </Col>
                    <Col id = "c-bottom" className = "bottomLetter" >
                    <h1>C</h1>
                    </Col>
                    <Col id = "d-bottom" className = "bottomLetter" >
                    <h1>D</h1>
                    </Col>
                    <Col id = "e-bottom" className = "bottomLetter">
                    <h1>E</h1>
                    </Col>
                    <Col id = "f-bottom" className = "bottomLetter" >
                    <h1>F</h1>
                    </Col>
                    <Col id = "g-bottom" className = "bottomLetter" >
                    <h1>G</h1>
                    </Col>
                    <Col id = "h-bottom" className = "bottomLetter" >
                    <h1>H</h1>
                    </Col>
                    <Col id = "a-right" className = "right-number">
                    </Col>
                </Row>
               
            </div>
        )
    }
}


