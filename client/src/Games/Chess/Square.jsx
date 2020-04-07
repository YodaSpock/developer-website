import React from 'react'
import "./Styles/Square.scss"
import rook from "./Images/BlackRook.png"
export default class Square extends React.Component{
    state = {}

    handleClick = () =>{

    }
    render(){
        const{
            isBlack,
            isOccupied,
            //piece,
            //column,
            //row
        } = this.props

        // let squareName = "square";
        // if(isBlack === 'true'){
        //     squareName = "square-black"
        // }
        let squareName = "dumbSquare";
        if(isBlack === true){
            squareName = "dumbSquare-black"
        }
        //".../Images/Black" + this.props.piece + ".png"
        return(
            <div className = {squareName}>
                <div className = "content">
                    {isOccupied ? 
                    <img src = {rook} className = "piece" alt = {"piece"} style = {{height: "100%", width: "100%"}}/> : 
                    null}
                </div>
            </div>
        )
    }
}