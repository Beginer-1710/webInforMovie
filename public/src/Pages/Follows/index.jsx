import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { useSelector } from 'react-redux';
import HeaderGenre from '../MovieGenre/Components/HeaderGenre';
import ShowListMovieGenre from '../MovieGenre/Components/ShowListMovieGenre';
import Loading from '../../Components/Loading'
import Button2 from '../../Components/Button2';
import TextAnimation2 from '../../Components/TextAnimation2';

Follows.propTypes = {
    
};

function Follows(props) {
    const StateRedux = useSelector(state => state);
    const listFollow = StateRedux.follow.listFollow || [];
    return (
       <div className='Follow'>
            <HeaderGenre nameGenre="FOLLOWING"/>
            <ShowListMovieGenre data={listFollow} haveDelete={true}/>
        </div>
    );
}

export default Follows;