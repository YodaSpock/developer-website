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
        {label: 8, top: 0 * 80},
        {label: 7, top: 1 * 80},
        {label: 6, top: 2 * 80},
        {label: 5, top: 3 * 80},
        {label: 4, top: 4 * 80},
        {label: 3, top: 5 * 80},
        {label: 2, top: 6 * 80},
        {label: 1, top: 7 * 80}
    ]; 

    
    const squares = columns.map(c => rows.map(r => ({
        row: r.label,
        column: c.label,
        top: r.top,
        left: c.left
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