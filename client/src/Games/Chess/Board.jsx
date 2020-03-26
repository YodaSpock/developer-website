import React from 'react'
import Square from './Square'
import {Row, Col} from 'antd'


export default class Board extends React.Component{
    state = {}

    render(){
        return(
            <Row>
                <Col span = {6}/>
                <Col span = {12}>
                    <Row>
                        <Col>
                            <Square isBlack = "false" column = "a" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "b" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "c" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "d" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "e" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "f" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "g" row = "8"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "h" row = "8"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "true" column = "a" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "b" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "c" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "d" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "e" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "f" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "g" row = "7"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "h" row = "7"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "false" column = "a" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "b" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "c" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "d" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "e" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "f" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "g" row = "6"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "h" row = "6"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "true" column = "a" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "b" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "c" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "d" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "e" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "f" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "g" row = "5"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "h" row = "5"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "false" column = "a" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "b" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "c" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "d" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "e" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "f" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "g" row = "4"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "h" row = "4"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "true" column = "a" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "b" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "c" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "d" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "e" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "f" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "g" row = "3"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "h" row = "3"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "false" column = "a" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "b" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "c" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "d" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "e" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "f" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "g" row = "2"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "h" row = "2"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Square isBlack = "true" column = "a" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "b" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "c" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "d" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "e" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "f" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "true" column = "g" row = "1"/>
                        </Col>
                        <Col>
                            <Square isBlack = "false" column = "h" row = "1"/>
                        </Col>
                    </Row>
                </Col>
                <Col span = {6}/>
            </Row>
        )
    }
}