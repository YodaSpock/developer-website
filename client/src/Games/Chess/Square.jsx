import React from 'react'

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
        <div>{isBlack} {column} {row} </div>
        )
    }
}