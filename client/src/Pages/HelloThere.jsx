import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import "../Styles/HelloThere.scss";
import starWars from '../Images/StarWarsAdam2.jpg';


const SpringTest = () => {
    const [isToggled, setToggle] = useState(false);
    //const [flipped, set] = useState(false);

    // const {transform, opacity} = useSpring({
    //     opacity: flipped ? 1 : 0,
    //     transform: `perspective(600px) rotateX(${flipped ? 180: 0}deg)`,
    //     config: {mass: 5, tension: 500, friction: 80}
    // })
    const helloThere = useSpring({opacity: isToggled ? 0 : 1 }); 
    const generalKenobi = useSpring({opacity: isToggled ? 1 : 0 }); 

     
    return (
        <div style = {{height: "100%", width: "100%"}}>
                <img 
                    onMouseOver = {() => setToggle(true)} 
                    onMouseOut = {() => setToggle(false)}
                    src = {starWars} alt = {"StarWars"} 
                    className = "starwars" 
                />

            {/* <animated.div className ="sw-adam" 
            //style={{ opacity: opacity.interpolate(o => 1 - o), transform }} 
            />
            <animated.div className ="sw-throne" 
            //style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} 
            /> */}

            <animated.div style = {helloThere}>
                <h2 style = {{paddingLeft: "5%"}}>Hello There</h2>
            </animated.div>
            <animated.div style = {generalKenobi}>
                <h2 style = {{paddingLeft: "5%"}}>General Kenobi</h2>
            </animated.div>
        </div>
    )
};

export default SpringTest;