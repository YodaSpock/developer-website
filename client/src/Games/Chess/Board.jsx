import React, { Fragment } from 'react'
import Square from './Square';


export default class Board extends React.Component{
    state = {}

    render(){
        const{
            squares
        } = this.props;


        return(
            <Fragment>
                {squares.map((square, index) =>{
                    const {
                        column,
                        row,
                    } = square;
                
                return (
                    <Square
                        key = {index}
                        isBlack = {'true'}
                        column = {column}
                        row = {row}
                    />
                );

                })}
            </Fragment>
        )
    }
}