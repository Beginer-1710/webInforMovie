import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import VideoRender from '../VideoRender';
import ShowList from '../../../../Components/ShowList';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import TextCustom from '../../../../Components/TextCustom';
import Slider from "react-slick";
import MovieFilm from '../MovieFilm';
import Loading from '../../../../Components/Loading';
ContentDetail.propTypes = {
    
};

function ContentDetail(props) {
    const {videos, idMovie , reviews , isChange} = props;
    let tempArrayReview = {};
    tempArrayReview = useMemo(() => {
        if(reviews.length > 10){
            return reviews?.slice(0,10)
        }
        else{
            return reviews?.slice(0,reviews.length)
        }
    })

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows : false
      };

    const randomNum = Math.floor(Math.random()*9) 

    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
    },[isChange])

    useEffect(() =>{
      setTimeout(() =>{
          setIsLoading(false);
      },500)
  },[isChange])



    return (
        
            isLoading ? <Loading /> :
            <div className='contentDetail'>
            <div className='contentDetail-container'>
                {
                    isChange ? 
                    <MovieFilm idMovie={idMovie}/> :
                    <>
                        <TextCustom content="Trailer" color={randomNum}/>
                        <div className='video-container'>
                            {
                                videos.map((item) => (
                                    <VideoRender srcVideo={item.key} nameTrailer={item.name}/>
                                ))
                            }
                        </div>
                    </>
                }


                <TextCustom content="Reviews" color={randomNum}/>
                <div className='review-container'>

                    {
                        tempArrayReview.length == 0 ? 
                        <div className='havenocoment'>
                            <h1>This movie has no reviews yet!</h1>
                        </div>
                        :(
                   
                        <Slider {...settings}>
                            {
                                tempArrayReview.map((item, index) => (
                                <div className='review-item' key={index}>
                                    <div className='review-pic'>
                                        <img src={
                                            item.author_details.avatar_path ? 
                                            `https://image.tmdb.org/t/p/original/${item.author_details.avatar_path}`
                                            : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`
                                        } alt="" />
                                    </div>
                                    <div className='review-content'>
                                        <p className='content-review'>{item.content}</p>
                                        <p className='name-author'>{item.author}</p>
                                    </div>
                                </div>
                        ))
                    }
                        </Slider>
                        )
                    }


                </div>
            </div>
            
            
            <div className='listSimiler'>
                <ShowList listId={idMovie} nameList="Similar" type="1"/>
            </div>
        </div> 
        
    );
}

export default ContentDetail;