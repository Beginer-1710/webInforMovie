import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import movieApi from '../../api/movieApi'
import ShowMenuList from '../ShowMenuList';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from '../../Pages/Login/Register'
import Login from '../../Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logOut } from '../../Pages/Login/userSlice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
Header.propTypes = {
    
};

function Header(props) {
    const buttonShowMenu = useRef();
    const header = useRef();

    const genreList = [{ id: 28, name: "Action" },{ id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },{ id: 99, name: "Documentary" },
    { id: 14, name: "Fantasy" },{ id: 36, name: "History" },
    { id: 27, name: "Horror" },{ id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },{ id: 10752, name: "War" },{ id: 37, name: "Western" } ]


    const [showMenu, setShowMenu] = useState(false);
    const [showMenuRespon, setShowMenuRespon] = useState(false);
    useEffect(() => {
        const scrollHeader = (e) => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if(scrollTop <=100){
                header.current.classList.add("top");
            }
            else{
                header.current.classList.remove("top");
            }
        }
        window.addEventListener("scroll",scrollHeader)

        return () => {
            window.removeEventListener("scroll",scrollHeader)
        }
    },[])


    useEffect(() => {
        const clickOutMenu = (e) => {
            if(e.target !== buttonShowMenu.current && e.target.className !== "menuList" && e.target.className !== "menuList-container" && e.target.className !== "menuList-item")
            {
                setShowMenu(false);
            }
        }

        window.addEventListener('click',clickOutMenu)

        return () => {
            window.removeEventListener('click',clickOutMenu)
        }
    },[])
    const showMenuGenre = () => {
        setShowMenu(x => !x)
        handleCloseShowSmallMenu();
    }

    const showMenuGenreRespon = () => {

        setShowMenuRespon(x => !x)
        handleClickCloseShowSmallMenuRespon();
    }
    const closeMenuGenreRespon = () =>{
        setShowMenuRespon(false)
    }
    
    const urlCurrent = useNavigate();
    const handleClickGoHome = () => {
        urlCurrent("/webInforMovie")
    }
    const handleClickGoFollow = () => {
        urlCurrent("/webInforMovie/follow")
        handleClickShowSmallMenuRespon()
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (even , respon) => {
        if(respon !== "escapeKeyDown" && respon !== "backdropClick")
        setOpen(false);
    };
    const [isLogin , setIsLogin] = useState(true);
    const handleChangeLogin = () => {
        setIsLogin(x => !x);
    }
    const StateRedux = useSelector(state => state.user)
    const isLoginTo =  StateRedux.current.id;

  
    
    const [showSmallMenu, setShowSmallMenu] = useState(false);
    const handleShowSmallMenu = () => {
        setShowSmallMenu(x => !x)
        handleClickCloseShowSmallMenuRespon();
        closeMenuGenreRespon();
        
    }
    const handleCloseShowSmallMenu = () => {
        setShowSmallMenu(false)
    }

    const dispatch = useDispatch();
    const handleLogOut = () => {
        const action = logOut();
        dispatch(action);
        handleShowSmallMenu();
    }

    
    const [showSmallMenuRespon , setShowSmallMenuRespon] = useState(false);
    const handleClickShowSmallMenuRespon = () => {
        setShowSmallMenuRespon(x => !x);
        handleCloseShowSmallMenu()
        closeMenuGenreRespon()
    }
    const handleClickCloseShowSmallMenuRespon = () => {
        setShowSmallMenuRespon(false)
    }
    return (
        <div className='header' ref={header}>
            <div className='header-container'>
                <div className='header-logo' onClick={handleClickGoHome}>
                    <img src="https://cliptv.vn/themes/cliptv/img/logo-summer.png?v=2" alt="headerLogo" />
                </div>
                <ul className='header-nav'>
                    {
                        isLoginTo ? <li className='header-nav_item' onClick={handleClickGoFollow}>Follow</li> : <></>
                    }
                    <li className='header-nav_item' onClick={showMenuGenre} ref={buttonShowMenu}>Genres</li>
                    {
                        isLoginTo ? 
                        <li className='header-nav_item useIcon'>
                            <AccountCircleIcon onClick={handleShowSmallMenu}/>
                            <ul className={showSmallMenu ? 'small_menu active' : 'small_menu'}>
                                <li onClick={handleLogOut}>Log out</li>
                            </ul>
                        </li>
                        : <li className='header-nav_item' onClick={handleClickOpen}>Login</li>
                    }
                </ul>




                <div className='Menu-respon'>
                    {
                        isLoginTo ? 
                        <li className='header-responItem useIcon'>
                            <AccountCircleIcon onClick={handleShowSmallMenu}/>
                            <ul className={showSmallMenu ? 'small_menu active' : 'small_menu'}>
                                <li onClick={handleLogOut}>Log out</li>
                            </ul>
                        </li>
                        : <li className='header-responItem' onClick={handleClickOpen}>Login</li>
                    }
                    <MenuIcon onClick={handleClickShowSmallMenuRespon}/>
                    <ul className={showSmallMenuRespon ? "Menu-respon_smallMenu active" : "Menu-respon_smallMenu"}>
                        {
                            isLoginTo ? <li className='header-responItem_menuItem' onClick={handleClickGoFollow}>Follow</li> : <></>
                        }
                        <li className='header-responItem_menuItem' onClick={showMenuGenreRespon}>Genres</li>
                    </ul>
                </div>




                <div className={showMenu ? 'menuListGenre active' : 'menuListGenre'}>
                    <ShowMenuList listItem={genreList} numberShow={4} onCloseMenu={showMenuGenre}/>
                </div>

                <div className={showMenuRespon ? 'menuListGenre active' : 'menuListGenre'}>
                    <ShowMenuList listItem={genreList} numberShow={3} onCloseMenu={showMenuGenreRespon}/>
                    <div className='CloseButtonMenuRespon' onClick={closeMenuGenreRespon}>
                        <HighlightOffIcon className='CloseButtonMenuRespon-item'/>
                    </div>
                </div>
            </div>


            <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                {
                isLogin ? (
                    <>
                        <Login onCloseMenuLogin={handleClose}/>
                        <p className='title-formLogin' onClick={handleChangeLogin}>You don't have account ? <span>Register here</span> !!</p>
                    </>
                )
                :
                (
                    <>
                        <Register onCloseMenuLogin={handleClose}/>
                        <p className='title-formLogin' onClick={handleChangeLogin}>You already have account ? <span>Login here</span> !!</p>
                    </>
                )
            }
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default Header;