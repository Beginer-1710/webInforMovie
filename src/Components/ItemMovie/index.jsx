import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItem } from '../../Pages/Detail/FollowSlice';
ItemMovie.propTypes = {
    
};

function ItemMovie(props) {
    const {imgItem , nameItem , idMovie , haveDelete , index} = props;
    const imgUrl = imgItem ? `https://image.tmdb.org/t/p/original/${imgItem}` : "https://ss-images.saostar.vn/wwebp700/2018/12/20/4290585/glass-poster.jpg"
    const currentUrl = useNavigate();
    const handleClickItem = () => {
        currentUrl(`/webInforMovie/detail/${idMovie}`)
    }

    const dispatch = useDispatch();
    const handleClickDeleteItem = (e) =>{
        const action = RemoveItem(index);
        dispatch(action);
        e.stopPropagation()
    }
    return (
        <div className='item' onClick={handleClickItem}>
            <div className='item-container'>
                <div className='Item-img_container'>
                        <img src={imgUrl} alt="Item-img" />
                        <div className='Item-img_hover'>
                            <div className='icon-container'>
                                <PlayArrowIcon className='youtube_icon'/>
                            </div>
                        </div>
                </div>
                <span className='iten-name'>{nameItem}</span>
            </div>

            {
            haveDelete &&
            <div className='deleteIcon' onClick={handleClickDeleteItem}>
                <ClearIcon className='deleteIcon-item'/>
            </div>
            }
        </div>
    );
}

export default ItemMovie;