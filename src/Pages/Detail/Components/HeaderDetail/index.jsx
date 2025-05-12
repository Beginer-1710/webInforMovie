
import './style.css'
import Button from '../../../../Components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../../FollowSlice';
import { useSnackbar } from 'notistack';
import Slider from "react-slick";
HeaderDetail.propTypes = {
    
};

function HeaderDetail({data = {}, credits = [], onChangeView , isChange}) {
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

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows : false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 860,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 630,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 530,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
          ]
      };

      const handleChangeView = () => {
        if(onChangeView)
        onChangeView(!isChange)
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
                        <Slider {...settings}>
                        {
                                credits.map((item, index) => (
                                        <div className='headerDetail-info_creditsItem'> 
                                            <div className='creditsItem_img' style={{backgroundImage : `url(https://image.tmdb.org/t/p/w500/${item.profile_path})`}}>
                                            </div>
                                            <div className='creditsItem_nameActor'>
                                                {item.name}
                                            </div>
                                        </div>
                                ))
                            }
                        </Slider>
                    </div>

                    <div className='button-handleWF'>
                        <div className='button-handleWF_item' onClick={handleClickFollow}>
                            <Button content="Follow" indexColor={2}/>
                        </div>
                        <div className='button-handleWF_item' onClick={handleChangeView}>
                            <Button content={isChange ? "Watch Trailer" : "Watch now"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDetail;