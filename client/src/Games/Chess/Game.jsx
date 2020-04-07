import React from 'react';
import Board from './Board';
import "./Styles/Game.scss";


export default class Game extends React.Component{

    render(){
        return(
            <div className = "game">
                <Board/>
            </div>
        )
    }
}