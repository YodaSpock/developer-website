import React  from 'react'
import Sqaure from './Square';
import {Button} from 'antd';
import "./Styles/Board.scss";


export default class Board extends React.Component{
    

    initializeBoard = () =>{
        const squares = [];
        const numOfRows = 8;
        const numOfCols = 8;
        const board = new Array(numOfCols);

        //const columnNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        //set rows and cols with empty arrays
        

        //fill the board with square Components
        let counter = 0;
        for(let i = 1; i < numOfCols + 1; i++){
            board[i] = new Array(numOfRows)
            for(let j = 1; j < numOfRows + 1; j++){
                let square = {
                    index: counter,
                    row: i,
                    col: j,
                    piece: null
                }
                squares[counter] = square;
                board[i][j] = square;
                counter++;
            }
        }
        console.log(squares);
        console.log(this.state.squares);
        this.setState({squares: squares});
        console.log(this.state.squares);
        
    }

    render(){
        
        //let squares = this.state.squares.map
        return(   
            <div className = "row-8">
                <Button onClick = {this.initializeBoard}>Start</Button>
                <Sqaure
                    isBlack = {true}
                    isOccupied = {false}
                    //piece = {"rook"}
                    //column = {"a"}
                    //row = {"8"}
                />
            </div>
        )
    }
}