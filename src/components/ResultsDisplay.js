import React from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const ResultsDisplay = ({ video, videos, onSelectedVideo }) => {
  return (
    <div className="ui two column doubling stackable padded grid container">
      <div className="column">
        <VideoList
          onSelectedVideo={onSelectedVideo}
          video={video}
          videos={videos}
        />
      </div>
      <div className="column">
        <VideoPlayer video={video} />
      </div>
    </div>
  );
};

export default ResultsDisplay;
