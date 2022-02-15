import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ video, videos, onSelectedVideo }) => {
  const videoList = videos.map((vid) => {
    const selected = video.id.videoId === vid.id.videoId;
    return (
      <VideoItem
        key={vid.id.videoId}
        onSelectedVideo={onSelectedVideo}
        video={vid}
        selected={selected}
      />
    );
  });

  return (
    <div className="ui segment">
      <div className="ui relaxed divided selection list">{videoList} </div>
    </div>
  );
};

export default VideoList;
