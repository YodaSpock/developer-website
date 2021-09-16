import React from "react";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import emoji from 'react-easy-emoji';
import "../Styles/Background.scss";
import "../Styles/History.scss"

export default class HistoryPage extends React.Component {

    render() {
        return (
            <div className = "backgroundHistory">
                <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key="010"
                  dateText="Oct 2020 - Present"
                  style={{ color: '#e86971'}}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3>Software Developer</h3>
                  <h4>N.I.S.C.</h4>
                  <p className = "historyParagraph">
                    Currently working as a full time full stack software developer at N.I.S.C. working on their trouble managment team. I work 
                    in Angular on the front-end while working with SpringBoot Java on the backend and well as PostreSQL in a hybrid Agile 
                    environment. 
                  </p>
                  <p className = "historyParagraph">
                    I work developing new features on our full stack web-based trouble managment application. I also work closely with UI and 
                    UX designers to improve and implement new features. I fix server and client side bugs while improving database quries and 
                    updating and devloping APIs. 
                  </p>
                </TimelineItem>
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
                  <p className = "historyParagraph">
                    This project was started on March 21st and is what you currently going through. It was a way for me to show
                    off some things that I can do, and to work on some fun projects duing the COVID-19 pandemic. It's goal is to 
                    help me get a full time job for starting after my May 2020 graduation. And yes I am the lead and only developer 
                    on this project. 
                  </p>
                  <p className = "historyParagraph">
                    The portfolio is made using React.js front end with help from ant design's react ui and sass styling. The backend for 
                    my projects such as chess is using node.js. I am currently working on developing the chess game to be played against 
                    an AI chess bot that will be written in Python. I am currently enrolled in a machine learning course at Iowa State, 
                    ComS 474, and I hope to put some of my knowledge to use in this project. 
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="008"
                  dateText="Aug 2019 - May 2020"
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
                  <p className = "historyParagraph">
                    During the course of senior year, myself and 5 others have been slowly but surely developing an Intelligent Code
                    Editor. The project is to take natural language and convert that into executable Java code. We made an IntelliJ 
                    plugin that allows users to highlight natural language and translate into Java code. We do this by running a machine
                    learning OpenNMT-py model through with an extensive hand-made dataset that allows users to select from multiple options
                    when doing translations. We do a fair amount of preprocessing with the data, something I particularly worked on, by 
                    filtering out words that aren't nouns or verbs. I also worked on creating a large dataset for our model to use, since 
                    we unable to find a suitable dataset for our purposes. As the semester comes to a close I will be sad to part with this
                    project.
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
                  <p className = "historyParagraph">
                   This was my final hackathon at Iowa State, and myself and two friends decided to make a multiplayer Tetris game
                   where all players play on the same field. We came up with idea on Friday night, and had a semi-working product by
                   Sunday morning. The gameplay was clunky and not ideal, but it was a great experience working with Node.js and 
                   working with web sockets. It was also a great experience working with two other great programmers on such a fun
                   project. 
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
                  <p className = "historyParagraph">
                    This was a semester long project that I was the oldest member on the team and the only one with one an
                    internship under their belt so I was definetly the senior developer. We were developing a gaming console
                    from the ground up using a Springboot Java backend, with a C++ frontend something none of us had ever used 
                    before. I was in charge on not only the database setup, maintance and the server code but I quickly became 
                    the one that was integrating client and server together and helping them talk. My team was amazing and we 
                    spent many hours debugging, and programming together. Apart from my internship it was the biggest eye opener
                    for realizing how important team communication is.
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
                  <p className = "historyParagraph">
                    I recently had the privelege of landing an summer intership at Buildertrend, a leading software development company based in Omaha,
                    Nebraska, that focuses on building construction managment 
                    software for helping builders and contractors run their business. There have been ranked as the #1 place to work in Omaha, 
                    Nebraska for the past two years, and I can say it was an amazing place to work.
                  </p>
                  <p className = "historyParagraph">
                    Over my time there, I became very familiar with React devlopment as my job became converting old web forms pages into new React 
                    components. This greatly improved the loading time for the web application, and also improved the look of the website. I also 
                    learned and improved my skills in  .NET framework, Typescript, Javascript, MySQL, CSS, HTML, and learned 
                    how to work in an Agile style environment. At Buildertrend we worked in teams of 5 developers and we incorporated daily standups 
                    and peer code reviews into our routine. 
                  </p>
                  <p className = "historyParagraph">
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
                  <p className = "historyParagraph">
                    This was the final project for my Computer Engineering 288 Embedded Systems Class. The class focused on embedded 
                    programming in C on using the roomba and with external sensors attached to the roomba. I was the sensors lead for 
                    the project and focuse on the sonar, IR, cliff, and bump sensors for the input. I had to detect any drop offs before
                    roomba fell in, and detect any small obstacles with the bump sensors. And then finally any large obstacles would be 
                    detected with the sonar and IR sensors. I was responsible for adjusting the data we recieved and 
                    correcting to get a the smallest error possible. I was then responsible for the sending the data to the UI so we can
                    correctly navgiate a maze of obstacles. 
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
                  <p className = "historyParagraph">
                    This class taught digital logic, and the final project was building a key pad lock system from and not, and or  
                    logic gates. We were devloping on Altera DE2 Board and using Quartus Prime to layout the project. 
                    This took an immense amount of time to develop the correct small components before making the state for 
                    the keypad lock. We had to develop registers, and a time clock system, and several other components for the final
                    project, and we had to demo our project to our TA. I was really pleased with my final working project and was very
                    happy with the material of the class. 
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
                  <p className = "historyParagraph">
                    This was my second hackathon with a my roommate and a couple other friends where we had plan to develop an Alexa skill. 
                    Our idea for this skill was a burning house scneario where you have to verbally search the room you were in for clues before 
                    the timer ran out and the house burnt down. It was a great experience although we never completed a finished product. We had
                    issues with interacting with the Alexa API to even start our application. It was a learning experience in the fact that we 
                    had spent so much time working on other aspects of the project such as utterances of what the user could say as well as the 
                    interaction between objects in a OOP setting but not focusing on the core aspect of integrating with Alexa. 
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
                  <p className = "historyParagraph">
                    This was my first ever hackathon, and it was with some people I barely knew at the time. We decided to make a webpage that
                    compared ISU credits to other community colleges and universities in Iowa to see what would transfer. All data was hardcoded 
                    and displayed directly to the user. The biggest challenge with this project was learning to work with others on a project.
                    This was the first time I had really run into issues concerning others on a programming project. I found out rather late that a 
                    few of us were working on the same thing becuase we did not have a good plan or communication. Overall it was a great learning 
                    experience and introduction to git as well as some front end development aspects.
                  </p>
                </TimelineItem>
            </Timeline>
           </div>
        )
    }
}
