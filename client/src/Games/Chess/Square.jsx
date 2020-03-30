import React from 'react'
import "./Square.scss"
export default class Square extends React.Component{
    state = {}

    handleClick = () =>{

    }
    render(){
        const{
            isBlack,
            occupied,
            piece,
            column,
            row
        } = this.props

        // let squareName = "square";
        // if(isBlack === 'true'){
        //     squareName = "square-black"
        // }
        let squareName = "dumbSquare";
        if(isBlack === 'true'){
            squareName = "dumbSquare-black"
        }

        return(
            <div className = {squareName}>
                <div className = "content">
                    {occupied ? piece : null}
                    {column}
                    { row}
                </div>
            </div>
        )
    }
}