import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import HeaderDetail from './Components/HeaderDetail';
import ContentDetail from './Components/ContentDetail';
import Loading from '../../Components/Loading'
import Plyr from "plyr-react";
import MovieFilm from './Components/MovieFilm';
Detail.propTypes = {
    
};

function Detail(props) {
    const idMovie = useParams().idMovie;
    const [data, setData] = useState({});
    const [credits, setCredits] = useState({});
    const [videos, setVideos] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [reviews, setReviews] = useState();
    useEffect(() => {
        (async () => {
            try {
                const movieDetail = await movieApi.getDetailMovie(idMovie);
                const credits = await movieApi.getCredits(idMovie);
                const videos = await movieApi.getVideos(idMovie);
                const reviews = await movieApi.getReviews(idMovie);
                setData(movieDetail.data)
                setCredits(credits.data)
                setVideos(videos.data.results)
                setReviews(reviews.data.results)
                setIsReady(true);
            } catch (error) {
                console.log("false to get api 2");
            }
        })()

        return () => {
            setIsReady(false);
        }
    },[idMovie])

    const [changeView,setChangeView] = useState(false);
    useEffect(() => {
        setChangeView(false);
    },[idMovie])
    const hanleChangeView = (value) => {
        setChangeView(value);
    }
    return (
        isReady ? (
            <div className='DetalMovie'>
            <HeaderDetail data={data} credits={credits.cast} onChangeView={hanleChangeView} isChange={changeView}/>
            <ContentDetail videos={videos} idMovie={idMovie} reviews={reviews} isChange={changeView}/>    
            </div>
        ) : <Loading />
    );
}

export default Detail;