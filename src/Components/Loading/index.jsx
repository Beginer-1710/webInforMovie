import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Loading.propTypes = {
    
};

function Loading(props) {
    return (
        <div className='loading'>
            <div className='ring'></div>
            <span>LOADING...</span>
        </div>
    );
}

export default Loading;