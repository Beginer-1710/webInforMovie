import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";


function VideoRender(props) {
    const {srcVideo , nameTrailer} = props;
    const videoSrc = {
        type: "video",
        sources: [
          {
            src: `https://www.youtube.com/embed/${srcVideo}`,
            provider: "youtube"
          }
        ]
      };
    const {videos = []} = props;
    return (
        <div className='videoRender'>
            <h4 className='nameTrailer'>{nameTrailer}</h4>
            <Plyr source={videoSrc} />
        </div>
    );
}

export default VideoRender;