import React, { useRef, useEffect } from 'react';
import './Video.css';

export const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Adjust the playback speed here
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <>
    <div className='video-title-container'>
        <h2 className='video-tile'> Create your screens in seconds!</h2>
    </div>
    <div className='video-container'>
      <video ref={videoRef} playsInline>
        <source src="../../../../public/video1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
}
