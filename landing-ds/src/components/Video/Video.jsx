import React from 'react';
import './Video.css';

export const Video = () => {
  const divStyle = {
    padding: '62.5% 0 0 0',
    position: 'relative'
  };

  const iframeStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '80%',
    height: '100%',
  };

  return (
    <>
      <div style={divStyle}>
        <iframe
          src="https://player.vimeo.com/video/952791982?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={iframeStyle}
          title="video1 (1)"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};
