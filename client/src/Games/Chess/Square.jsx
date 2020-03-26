import React from 'react'
import "./Square.scss"

export default class Square extends React.Component{
    state = {}

    handleClick = () =>{

    }
    render(){
        const{
            isBlack,
            column,
            row
        } = this.props

        let squareName = "square";
        if(this.props.isBlack == 'true'){
            console.log("here");
            squareName = "square-black"
        }

        return(
            <div className ={squareName}>
                <div className = "content">{column}{row} {isBlack}</div>
            </div>
        )
    }
}