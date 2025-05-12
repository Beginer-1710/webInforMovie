import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import TextAnimation from '../../../../Components/TextAnimation';
HeaderGenre.propTypes = {
    
};

function HeaderGenre(props) {
    const {nameGenre} = props;
    return (
        <div className='headerGenre'>
            <div className='headerGenre-container'>
                <TextAnimation content={nameGenre} />
            </div>
        </div>
    );
}

export default HeaderGenre;