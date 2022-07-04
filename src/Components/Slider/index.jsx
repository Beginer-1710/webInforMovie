import React, { useEffect, useState } from 'react';
import './style.css'
import movieApi from '../../api/movieApi';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

Slider.propTypes = {
    
};

function Slider(props) {
    const [popularList , setPopularList] = useState([]);

    const params = {
        page : 1
    }

    useEffect(() => {
        (async () => {
            try {
                const respon = await movieApi.getPopular(params);
                const tempList = respon.data.results.slice(0,3);
                setPopularList(tempList);
            } catch (error) {
                console.log("false to fetch API");
            }
        })()
    },[])
    const currentUrl = useNavigate();
    const handleClickWatch = (id) => {
        currentUrl(`/detail/${id}`)
    }
    return (
        <div className='Container-slider'>
            <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            speed={700}
            autoplay={{delay: 3000}}
            >

{
                popularList.map((item , index) => (
                    <SwiperSlide key={index}>
                         {({ isActive }) => (
                            <div className={isActive ? 'sliderItem active' : 'sliderItem'} style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`}}>
                            <div className='sliderItem-container'>
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
                         )}
                    </SwiperSlide>
                ))
            }
                
            </Swiper>
            
        </div>
    );
}

export default Slider;