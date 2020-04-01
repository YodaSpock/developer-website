import React from "react";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import emoji from 'react-easy-emoji';

export default class HistoryPage extends React.Component {

    


    //Change this to timeline either bookmarked one or the antd 
    render() {
        return (
            <div >
                <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key="009"
                  dateText="Mar 2020 - Present"
                  dateInnerStyle={{ background: '#ffac1d', color: '#ffffff' }}
                  style = {{color: '#ffac1d'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Personal Website</h3>
                  <h4>Isaac Spanier Portfolio - Lead Developer {emoji('😎')}</h4>
                  <p>
                   This project was started on March 21st and is what you currently going through. It was a way for me to show
                   off some things that I can do, and to work on some fun projects duing the COVID-19 pandemic. It's goal is to 
                   help me get a full time job for starting after my May 2020 graduation. And yes I am the lead and only developer 
                   on this project. 
                  </p>
                  <p>
                    The portfolio is made using React.js front end with help from ant design's react ui and sass styling. The backend for 
                    my projects such as chess is using node.js. I am currently working on developing the chess game to be played against 
                    an AI chess bot that will be written in python. I am currently enrolled in a machine learning course at Iowa State, 
                    ComS 474 and I hope to put some of my knowledge to use in this project. 
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="008"
                  dateText="Aug 2019 - Present"
                  dateInnerStyle={{ background: '#61b8ff', color: '#ffffff' }}
                  style = {{color: "#61b8ff"}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Senior Design Project</h3>
                  <h4>Intelligent Code Editor - Testing Lead</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="007"
                  dateText="October 2019"
                  dateInnerStyle={{ background: '#76bb7f', color: '#ffffff' }}
                  style = {{color: '#76bb7f'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Squirrel Hacks Hackathon</h3>
                  <h4>Multiplayer Tetris</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                   key="006"
                   dateText="Aug - Dec 2019"
                   style={{ color: '#e86971'}}
                   bodyContainerStyle={{
                     background: '#ddd',
                     padding: '20px',
                     borderRadius: '8px',
                     boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                   }}
                >
                  <h3>G.A.M.E Project</h3>
                  <h4>ComS 309 Project - Lead Backend Developer</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="005"
                  dateText="May - Aug 2019"
                  style={{ color: '#ffac1d'}}
                  dateInnerStyle={{ background: '#ffac1d', color: '#ffffff'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Buildertrend Internship</h3>
                  <h4>Worked as Software Development Intern</h4>
                  <p>
                   Buildertrend is a leading software development company based in Omaha Nebraska, that focuses on building construction managment 
                   software for helping builders and contractors run their business. There have been ranked as the #1 place to work in Omaha, 
                   Nebraska for the past two years, and I can say it was an amazing place to work.
                  </p>
                  <p>
                   Over my time there, I became very familiar with React devlopment as my job became converting old web forms pages into new React 
                   components. This greatly improved the loading time for the web application, and also improved the look of the website. I also 
                   learned and improved my skills in  .NET framework, Typescript, Javascript, MySQL, CSS, HTML, and learned 
                   how to work in an Agile style environment. At Buildertrend we worked in teams of 5 developers and we incorporated daily standups 
                   and peer code reviews into our routine. 
                  </p>
                  <p>
                  During the internship I competed with 3 fellow interns in a hackathon housted by Buildertrend, and we tried to develop a crude version
                  of an improved image editor. We spent 48 developing and had to present our final product at the end of the weekend. We ended up winning 
                  people's choice for the event. At the end of the intership I had finished several components and I am very proud to say that all the 
                  components I developed are currently in production and are helping contractors and builders improve their business. 
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="004"
                  dateText="Nov - Dec 2017"
                  dateInnerStyle={{ background: '#61b8ff', color: '#ffffff' }}
                  style = {{color: '#61b8ff'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Embedded Roomba Maze Navigation</h3>
                  <h4>CprE 288 Final Project</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="003"
                  dateText="Nov - Dec 2017"
                  style = {{color: '#76bb7f'}}
                  dateInnerStyle={{ background: '#76bb7f', color: '#ffffff' }}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Digital Logic Key Pad Lock</h3>
                  <h4>CprE 281 Final Project</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="October 2017"
                  dateInnerStyle={{ background: '#e86971', color: '#ffffff' }}
                  style = {{color: '#e86971'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Squirrel Hacks Hackathon</h3>
                  <h4>Alexa Escape Room Game</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="001"
                  dateText="October 2016"
                  dateInnerStyle={{ background: '#ffac1d', color: '#ffffff' }}
                  style = {{color: '#ffac1d'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Squirrel Hacks Hackathon</h3>
                  <h4>College Credit Website</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
                  </p>
                </TimelineItem>
            </Timeline>
           </div>
        )
    }
}
