import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import ItemMovie from '../../../../Components/ItemMovie'
import Button2 from '../../../../Components/Button2';
ShowListMovieGenre.propTypes = {
    
};

function ShowListMovieGenre({data = [], haveDelete}) {

    
    const [canNext, setCanNext] = useState(false)
    const [shortData, setShortData] = useState([]);
    useEffect(() => {
        setShortData(data.length >= 20 ? data.slice(0,20) : data.slice(0,data.length))
        setCanNext(data.length >= 20 ? true : false)
    },[data])

    const handleClickMore = () => {
        const currentLength = shortData.length;
        if(data.length - currentLength >= 20)
        {
            setShortData(data.slice(0,currentLength+20))
        }
        else{
            setShortData(data.slice(0,data.length))
            setCanNext(false)
        }
    }

    const [inputSearch, setInputSearch] = useState("");
    const handleChangeInput = (e) => {
        setInputSearch(e.target.value);
    }
    let arrayListSearch;
    const handleSubmitSearch = () => {
        arrayListSearch = data.filter((item) => {
            return item.original_title.toLowerCase().includes(inputSearch.toLowerCase());
        })
        setShortData(arrayListSearch);
        setCanNext(false)
    }
    return (
        <div className='listMovieGenre'>
            <div className='search-bar'>
                <input type="text" placeholder='Enter keyword' value={inputSearch} onChange={handleChangeInput}/>
                <div className='search-icon' onClick={handleSubmitSearch}>
                    <span>Search</span>
                </div>
            </div>
            <div className='listMovieGenre-container'>
                {
                    shortData.map((item , index) => (
                        <div key={index} className='item_MovieGenre'>
                            <ItemMovie imgItem={item.poster_path} nameItem={item.original_title} idMovie={item.id} haveDelete={haveDelete} index={index}/>
                        </div>
                    ))
                }
            </div>
           {
            canNext && 
            (
                <div className='Button_moreItem' onClick={handleClickMore}>
                    <Button2 content="Load more" />
                </div>
            )
           }
        </div>
    );
}

export default ShowListMovieGenre;