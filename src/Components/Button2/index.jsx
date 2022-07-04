import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Button2.propTypes = {
    
};

function Button2(props) {
    const{color = 0 , content} = props;
    const numberColor = (color % 9)+1;
    return (
        <div className={`btn-2 color${numberColor}`}>
            <span>{content}</span>
        </div>
    );
}

export default Button2;