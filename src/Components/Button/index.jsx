import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Button.propTypes = {
    
};

function Button(props) {
    const {content} = props;
    return (
        <div className='button-custom'>
            <span>{content}</span>
        </div>
    );
}

export default Button;