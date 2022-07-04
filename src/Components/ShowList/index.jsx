import React, { useEffect, useState } from 'react';

import './style.css'
import movieApi from '../../api/movieApi';
import ItemMovie from '../ItemMovie';


import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import Button2 from '../Button2';
import TextAnimation from '../TextAnimation';
ShowList.propTypes = {
    
};

function ShowList(props) {
    const {listId , nameList ,type , index} = props;
    const [listMovie , setListMovie] = useState([]);
    const param = {
        page : 1
    }
    useEffect(() => {
        (async () => {
            try {
                let respon;
                let tempList;
                if(type == undefined)
                {
                     respon = await movieApi.getList(listId,param);
                     tempList = (respon.data.items).slice(0,10);
                     
                }
                else{
                     respon = await movieApi.getSilmilar(listId);
                     tempList = (respon.data.results).slice(0,10);
                     
                }
                setListMovie(tempList);
            } catch (error) {
                console.log("false to get listssss");
            }
        })()
    },[])


    const urlCurrent = useNavigate();
    const hanleClickViewMore = () => {
        urlCurrent(`/webInforMovie/genres/${nameList}_${listId}`)
    }
    
    return (
        <div className='listMovieHome'>
            <div className='listMovieHome-container'>
                <div className='listMovieHome-infor'>
                    <TextAnimation content={nameList}/>
                    {
                        type ? <></> : <div  onClick={hanleClickViewMore}><Button2 color={index} content="View More"/></div>
                        
                    }
                </div>
                <div className='listMovieHome-list'>
                    <Swiper
                     grabCursor={true}
                     spaceBetween={10}
                     slidesPerView={"auto"}
                    >
                        {
                            listMovie.map((item, index) => (
                                <SwiperSlide key={index}>
                                     <ItemMovie imgItem={item?.poster_path} nameItem={item?.original_title} idMovie={item?.id}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ShowList;