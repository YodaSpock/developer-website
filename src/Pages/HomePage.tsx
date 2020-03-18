import React from "react";
import {GithubFilled, LinkedinFilled} from '@ant-design/icons';
export default class HomePage extends React.Component {

    render() {
        return (
           <div>
               My name is Isaac Spanier<br/>
               Looking for a full time software engineering position in the Seattle Location<br/>
               LinkedIn Page <a href="https://www.linkedin.com/in/isaacspanier/"> Here </a> <LinkedinFilled /><br/>
               GitHub Page <a href = "https://github.com/YodaSpock"> Here </a> <GithubFilled /><br/>
           </div>
        )
    }

}
