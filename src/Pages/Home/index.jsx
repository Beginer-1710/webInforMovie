import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../Components/Slider';
import ShowList from '../../Components/ShowList';
import movieApi from '../../api/movieApi';
import Loading from '../../Components/Loading'
Home.propTypes = {
    
};

function Home(props) {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        setTimeout(() =>{
            setIsReady(true)
        },1500 )
    },[])
    const listGenres = [
        { id: 28, name: "Action" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 14, name: "Fantasy" },
        { id: 10402, name: "Music" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }
    ]
    
    return (
        
            isReady ? (
                <>
                    <Slider />
                    {
                        listGenres.map((item, index) => (
                            <ShowList key={index} listId={item.id} nameList={item.name} index={index}/>
                        ))
                    }
                </>
            )
            :
            <Loading />
        
    );
}

export default Home;