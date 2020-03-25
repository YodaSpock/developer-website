import React from 'react'
import Square from './Square'



export default class Board extends React.Component{
    state = {}
    

    convertAlpha(x){
        var result = 'a';
        switch(x){
            case 1:
                result = "a";
                break;
            case 2:
                result = "b";
                break;
            case 3:
                result = "c";
                break;
            case 4:
                result = "d";
                break;
            case 5:
                result = "e";
                break;
            case 6:
                result = "f";
                break;
            case 7:
                result = "g";
                break;
            case 8:
                result = "h";
                break;
            default:
                result = "a";
        }
        return result;
    }
   
    render(){
        return(
            <div>
                <Square isBlack = "true" column = "a" row = "1"/>
            </div>
        )
    }
}