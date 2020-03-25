import React from "react";
import resume from '../Images/resume1.jpg';

export default class ResumePage extends React.Component {

    render() {
        return (
            <div>
                <img src = {resume} alt = {"Isaac Spanier 2020 Resume"} style = {{height: "40%", width: "50%", marginLeft: "25%", marginRight: "25%"}}/>
            </div>   
        )
    }

}
