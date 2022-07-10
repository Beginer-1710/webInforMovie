import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Loading from '../../../../Components/Loading';
MovieFilm.propTypes = {
    
};

function MovieFilm(props) {
    const {idMovie} = props;
    return (
            <div className='movieFilm'>
                <div className='movieFilm-container'>
                    <iframe id="ve-iframe" src={`https://2embed.org/embed/${idMovie}`} width="100%" height="100%" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>
                </div>
            </div>
            
            
    );
}

export default MovieFilm;