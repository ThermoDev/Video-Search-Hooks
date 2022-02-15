import React, { Fragment } from 'react';

const VideoItem = ({ video, selected, onSelectedVideo }) => {
  if (video) {
    return (
      <div
        className={`item ${selected ? 'active' : ''}`}
        onClick={() => onSelectedVideo(video)}
      >
        <div className="content">
          <div
            className="header"
            dangerouslySetInnerHTML={{ __html: video.snippet.title }}
          ></div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default VideoItem;
