import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SliderHome from '../../Components/Slider';
import ShowList from '../../Components/ShowList';
import movieApi from '../../api/movieApi';
import Loading from '../../Components/Loading'
import { listGenres } from '../../Common/constant';
import { Box } from '@mui/material';
Home.propTypes = {
    
};

function Home(props) {

    const [loading,setLoading] = useState(true);
    const [dataAll,setDataAll] = useState([])
    const [dataHeader,setDataHeader] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const tempData = [];
                const promises = [];
                for(let i = 0 ; i < listGenres.length ; i++){
                    promises.push(movieApi.getList(listGenres[i].id,{page : 1}).then((data) => {
                        tempData.push({data : data.data.items.slice(0,10),listId : listGenres[i].id,nameList : listGenres[i].name })
                    }))
                }
                promises.push(movieApi.getPopular({page : 1}).then((data) => {
                    setDataHeader(data.data.results.slice(0,3))
                }))
                Promise.all(promises).then(() => {
                    setDataAll(tempData);
                    setLoading(false);
                })
            } catch (error) {
                
            }
        })()
    },[])
    
    console.log(dataAll,"kj")


    return (
        loading ? <Loading /> : (
            <Box className='containerMain' sx={{contentVisibility : 'auto'}}>
                <SliderHome popularList={dataHeader}/>
                {
                    dataAll.map((item, index) => (
                        <ShowList key={index} listId={item.listId} nameList={item.nameList} data={item.data} index={index}/>
                    ))
                }
            </Box>  
        )  
    );
}

export default Home;