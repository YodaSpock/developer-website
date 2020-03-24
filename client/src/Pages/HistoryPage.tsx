import React from "react";
import {Steps, Popover} from 'antd';

const {Step} = Steps;
export default class HistoryPage extends React.Component {

    state = {
        timelineDate: 0,
    }

    onTimelineChange = (timelineDate: any) => {
        console.log('onChange:', timelineDate);
        this.setState({timelineDate});
    }

    //Change this to timeline either bookmarked one or the antd 
    render() {
        const {timelineDate} = this.state;
        return (
            <div >
                <Steps current={timelineDate} onChange={this.onTimelineChange}>
                    <Step title="August 2016" description="First Semester at ISU" />
                    <Step title="Summer 2019" description="BuilderTrend Intership" />
                    <Step title="May 2020" description="Graduated College" />
                </Steps>
           </div>
        )
    }
}
