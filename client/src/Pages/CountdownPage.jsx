import React from "react";
import "../Styles/Background.scss";
import {Row} from 'antd';
import {formatDuration, intervalToDuration} from 'date-fns';


export default class CountdownPage extends React.Component {

    
    todaysDate = new Date();
    moveInDate = new Date(2021, 4, 16);

    render() {
        return (
            <div>
                <Row style = {{display: "flex", justifyContent: "center", fontSize: "30px"}}>
                    {formatDuration(intervalToDuration({
                        start: this.todaysDate,
                        end: this.moveInDate
                    }), {format: ['days', 'hours', 'minutes', 'seconds']})
                    }
                </Row>
                
            </div>
        )
    }

}
