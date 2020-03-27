import React from 'react';
import Board from './Board';

const generateSquares = () =>{  
    
    const columns = [
        {label: 1, left: 0 * 80},
        {label: 2, left: 1 * 80},
        {label: 3, left: 2 * 80},
        {label: 4, left: 3 * 80},
        {label: 5, left: 4 * 80},
        {label: 6, left: 5 * 80},
        {label: 7, left: 6 * 80},
        {label: 8, left: 7 * 80}
    ]; 

    const rows = [
        {label: 8},
        {label: 7},
        {label: 6},
        {label: 5},
        {label: 4},
        {label: 3},
        {label: 2},
        {label: 1}
    ]; 

    
    const squares = columns.map(c => rows.map(r => ({
        row: r.label,
        column: c.label
    })));   

    const boardSquares = [];
    squares.forEach(r => boardSquares.push(...r));
    return boardSquares;
}


export default class Game extends React.Component{

    state = {
        squares: generateSquares()
    }
    render(){
        return(
            <div className = "Game">
                <Board 
                    squares = {this.state.squares}
                />
            </div>
        )
    }
}