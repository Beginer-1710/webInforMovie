import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
TextCustom.propTypes = {
    
};

function TextCustom(props) {
    const{color = 0 , content} = props;
    const numberColor = (color % 9)+1;
    return (
        <h3 className={`textCustom color${numberColor}`}>
            <span>{content}</span>
        </ h3>
    );
}

export default TextCustom;