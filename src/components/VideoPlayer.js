import React from 'react';

const VideoPlayer = ({ video }) => {
  if(video.length === 0)
    return <></>

  return (
    <iframe
      id="ytplayer"
      type="text/html"
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
      title={video.snippet.title}
      frameBorder="0"
      height="100%"
      width="100%"
    ></iframe>
  );
};

export default VideoPlayer;
