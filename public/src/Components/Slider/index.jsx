import React, { useEffect, useState } from 'react';
import './style.css'
import movieApi from '../../api/movieApi';

import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@mui/material';


function SliderHome({popularList=[]}) {
    // const [popularList , setPopularList] = useState([]);

    // const params = {
    //     page : 1
    // }

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const respon = await movieApi.getPopular(params);
    //             const tempList = respon.data.results.slice(0,3);
    //             setPopularList(tempList);
    //         } catch (error) {
    //             console.log("false to fetch API");
    //         }
    //     })()
    // },[])




    const currentUrl = useNavigate();
    const handleClickWatch = (id) => {
        currentUrl(`/webInforMovie/detail/${id}`)
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows : false
      };
    return (
        <Box className='Container-slider' sx={{contentVisibility : 'auto'}}>
            <Slider {...settings}>
                {
                    popularList.map((item , index) => (
                        <div className={'sliderItem'} style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${item.backdrop_path}) !important`}}>
                            <img className='background_img' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt=""  />
                            <div className='sliderItem-container' >
                                <div className='sliderItem-infor'>
                                    <h1>{item.original_title}</h1>
                                    <p>{item.overview}</p>
                                    <div className='sliderItem-infor_butons'>
                                        <button className='sliderItem-infor_butonsWatch' onClick={() => {handleClickWatch(item.id)}}>
                                            Watch now
                                        </button>
                                    </div>
                                </div>
    
                                <div className='sliderItem-img'>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                                </div>  
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </Box>
    );
}

export default SliderHome;