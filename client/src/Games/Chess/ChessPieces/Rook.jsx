import ChessPiece from "./ChessPiece"
import "./Images/BlackRook.png";
import "./Images/WhiteRook.png";


export default class Rook extends ChessPiece{
    constructor(color, row, column){
        super(color, row, column);
        //MORE?
    }


        render(){
            return(
                <img src = {chess} alt = {"Chess Game"} className = "inprogress" />
            )
        }
    }