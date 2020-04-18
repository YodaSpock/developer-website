import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import starWars from '../Images/StarWarsAdam2.jpg';
import throne from '../Images/StarWarsThrone.jpg';


const SpringTest = () => {
    const [isToggled, setToggle] = useState(false);
    const fade = useSpring({
        opacity: isToggled ? 0 : 1
    }); 
    const fade2 = useSpring({
        opacity: isToggled ? 1 : 0
    }); 
     console.log(fade);

     
    return (
        <div className = "fade" >
            <button onClick={() => setToggle(!isToggled)}>The Test</button>
            <animated.h1 style = {fade}>Hello There</animated.h1>
            <animated.h1 style = {fade2}>General Kenobi</animated.h1>
        </div>
    )
};

export default SpringTest;