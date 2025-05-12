import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Button.propTypes = {
    
};

function Button(props) {
    const {content, indexColor = 0} = props;
    return (
        <div className={`button-custom color${indexColor}`}>
            <span>{content}</span>
        </div>
    );
}

export default Button;