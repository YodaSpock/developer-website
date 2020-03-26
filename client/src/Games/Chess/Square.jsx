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

        return(
            <div className = "square">
                <div className = "content">{column}{row} {isBlack}</div>
            </div>
        )
    }
}