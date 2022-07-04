import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../../FollowSlice';
import { useSnackbar } from 'notistack';
HeaderDetail.propTypes = {
    
};

function HeaderDetail(props) {
    const {data = {}, credits = []} = props;
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const StateRedux = useSelector(state => state.user)
    const handleClickFollow = () => {
        const isLoginTo =  StateRedux.current.id;
        if(isLoginTo)
        {
            const dataFollow = {
                poster_path : data?.poster_path,
                original_title : data?.original_title,
                id : data?.id
            }
    
            const action = AddItem(dataFollow);
            dispatch(action);
            enqueueSnackbar("Đã thêm vào danh sách Follow!!!",{variant:"success"})
        }
        else
        enqueueSnackbar("Bạn cần đăng nhập để theo dõi phim!!!",{variant:"info"})
    }
    return (
        <div className='headerDetail'>
            <div className='img-bebind' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`}}>
            </div>
            <div className='headerDetail-container'>
                <div className='headerDetail-img'>
                    <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt="" />
                </div>
                <div className='headerDetail-info'>
                    <h1>{data?.original_title}</h1>
                    <div className='headerDetail-info_genres'>
                        {
                            data.genres == undefined ? <></> : 
                             data?.genres.map((item , index) => (
                                <span key={index}>{item.name}</span>
                            ))
                        }
                    </div>
                    <p className='headerDetail-info_overView'>
                        {data?.overview}
                    </p>
                    <div className='headerDetail-info_credits'>
                        <Swiper
                            grabCursor={true}
                            spaceBetween={10}
                            slidesPerView={"auto"}
                        >
                            {
                                credits.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        {/* <div className='headerDetail-info_creditsItem'> */}
                                            <div className='creditsItem_img' style={{backgroundImage : `url(https://image.tmdb.org/t/p/w500/${item.profile_path})`}}>

                                            </div>
                                            <div className='creditsItem_nameActor'>
                                                {item.name}
                                            </div>
                                        {/* </div> */}
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    <div className='follow-button' onClick={handleClickFollow}>
                        <Button content="Follow"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDetail;