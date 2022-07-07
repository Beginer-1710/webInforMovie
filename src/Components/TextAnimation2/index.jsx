import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
index.propTypes = {
    
};

function index(props) {
    const{color = 0 , content} = props;
    const numberColor = (color % 9)+1;
    return (
        <h3 className={`text-animation2 color${numberColor}`}>
            <span>{content}</span>
        </ h3>
    );
}

export default index;