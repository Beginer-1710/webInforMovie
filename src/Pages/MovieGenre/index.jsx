import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom'
import movieApi from '../../api/movieApi';
import HeaderGenre from './Components/HeaderGenre';
import ShowListMovieGenre from './Components/ShowListMovieGenre';
import Loading from '../../Components/Loading'
MovieGenre.propTypes = {
    
};

function MovieGenre(props) {
    const idGenre = useParams().idGenre;
    const inforLink = idGenre.split("_");
    const [listData, setListData] = useState([]);
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                const respon = await movieApi.getList(inforLink[1])
                setListData(respon.data.items);
                setIsReady(true)
            } catch (error) {
                console.log("fasle to fetch API");
            }
        })()
        return () => {
            setIsReady(false)
        }
    },[idGenre])
    return (
        
            isReady ? (
                <div className='MovieGenre'>
                    <HeaderGenre nameGenre={inforLink[0]}/>
                    <ShowListMovieGenre data={listData} />
                 </div>
            ) :
            <Loading />
        
    );
}

export default MovieGenre;