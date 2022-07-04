import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import {useNavigate} from 'react-router-dom'
ShowMenuList.propTypes = {
    
};

function ShowMenuList(props) {
    const {listItem, numberShow , onCloseMenu} = props;
    const currentParam = useNavigate();
    const handleClickLink = (item) => {
        currentParam(`/webInforMovie/genres/${item.name}_${item.id}`)
        onCloseMenu()
    }

    return (
        <div className='menuList'>
            <div className='menuList-container'>
                {
                    listItem.map((item,index) => (
                        <div key={index} onClick={() => handleClickLink(item)} className='menuList-item' style={{flex: `${100/numberShow}% 0`}}>
                                {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ShowMenuList;