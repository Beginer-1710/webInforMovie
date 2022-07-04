import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src="https://cliptv.vn/themes/cliptv/img/logo-summer.png?v=2" alt="headerLogo" />
                </div>
                <div className='footer-content'>
                    <span>
                        Home
                    </span>
                    <span>
                        Live
                    </span>
                    <span>
                        You must watch
                    </span>
                    <span>
                        Contact us
                    </span>
                    <span>
                        FAQ
                    </span>
                    <span>
                        Recent release
                    </span>
                    <span>
                        Term of services
                    </span>
                    <span>
                        Premium
                    </span>
                    <span>
                        Top IMDB
                    </span>
                    <span>
                        About us
                    </span>
                    <span>
                        Pravacy policy
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;