import React from 'react';
import {useSpring, animated} from 'react-spring';
import starWars from '../Images/StarWarsAdam2.jpg';
import throne from '../Images/StarWarsThrone.jpg';


const SpringTest = () => {
    const fade = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: 0
        }
    });
     console.log(fade);

     
    return (
        <animated.div className = "fade" style = {fade}>
            <img src = {starWars} style = {{height: "auto", width: "auto"}} className = "starwars"/>
        </animated.div>
    )
};

export default SpringTest;