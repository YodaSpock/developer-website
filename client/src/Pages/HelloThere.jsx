import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import starWars from '../Images/StarWarsAdam2.jpg';
import throne from '../Images/StarWarsThrone.jpg';


const SpringTest = () => {
    const [isToggled, setToggle] = useState(false);
    const helloThere = useSpring({
        opacity: isToggled ? 0 : 1
    }); 
    const generalKenobi = useSpring({
        opacity: isToggled ? 1 : 0
    }); 

     
    return (
        <div>
            <div>
                <img 
                    onMouseOver = {() => setToggle(true)} 
                    onMouseOut = {() => setToggle(false)}
                    src = {starWars} alt = {"StarWars"} 
                    className = "starwars" 
                />
            </div>
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