import React from 'react'
import "./Square.scss"
import WhiteRook from './ChessPieces/WhiteRook.png';

export default class Square extends React.Component{
    state = {}

    handleClick = () =>{

    }
    render(){
        const{
            isBlack,
            //column,
            //row
        } = this.props

        let squareName = "square";
        if(isBlack === 'true'){
            console.log("here");
            squareName = "square-black"
        }

        return(
            <div className ={squareName}>
                <div className = "content">
                    <img src = {WhiteRook} alt = {"White Rook"} className = "chessPiece" />
                </div>
            </div>
        )
    }
}