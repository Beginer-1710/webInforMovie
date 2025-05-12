import React, { useEffect, useState } from 'react';
import './style.css'
import movieApi from '../../api/movieApi';
import ItemMovie from '../ItemMovie';
import { useNavigate } from 'react-router-dom';
import Button2 from '../Button2';
import Slider from "react-slick";
import TextCustom from '../TextCustom';
import Loading from '../Loading';
ShowList.propTypes = {
    
};

function ShowList({listId , nameList ,type , index,data=[]}) {

    const urlCurrent = useNavigate();
    const hanleClickViewMore = () => {
        urlCurrent(`/webInforMovie/genres/${nameList}_${listId}`)
    }
    

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows : false,
        draggable : true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
          ]
      };
    return (
            <div className='listMovieHome'>
                <div className='listMovieHome-container'>
                    <div className='listMovieHome-infor'>
                        <TextCustom content={nameList} color={index}/>
                        {
                            type ? <></> : <div  onClick={hanleClickViewMore}><Button2 color={index} content="View More"/></div>
                            
                        }
                    </div>
                    <div className='listMovieHome-list'>

                    <Slider {...settings}> 
                      {
                          data.map((item, index) => (
                              <ItemMovie imgItem={item?.poster_path} nameItem={item?.original_title} idMovie={item?.id} key={index}/>
                          ))
                      }
                    </Slider>
                    </div>
                </div>
            </div>
    );
}

export default ShowList;