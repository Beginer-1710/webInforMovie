import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
TextAnimation.propTypes = {
    
};

function TextAnimation({content=""}) {
    const arrayLetter = content.split("");
    return (
        <h3 className='text-animation'>
            {
                arrayLetter.map((item,index) =>(
                    <span key={index} style={{animationDelay : `${0.1 * (index+1)}s`}}>{item}</span>
                ))
            }
        </h3>
    );
}

export default TextAnimation;