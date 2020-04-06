import React, { Fragment } from 'react'
import Square from './Square';
import "./Board.scss";


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
                    <div>
                        <div className = "row-8">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-7">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-6">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-5">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-4">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-3">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-2">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                        <div className = "row-1">
                        <Square
                            key = {index}
                            isBlack = {'true'}
                            column = {column}
                            row = {row}
                        />
                        </div>
                </div>

                );

                })}
            </Fragment>
        )
    }
}