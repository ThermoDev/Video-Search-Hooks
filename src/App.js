import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoPlayer from './components/VideoPlayer';
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';
import axios from 'axios';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY.toString()}`; /* Replace with your own API key from the YouTube API. */

const App = () => {
  const [error, setError] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [video, setVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const [term, setTerm] = useState('');

  const onSearchSubmit = useCallback(async (term) => {
    // console.log(term);
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: YOUTUBE_API_KEY,
            q: term,
            type: 'video',
            part: 'snippet',
          },
        }
      );

      if (response.data.pageInfo.totalResults === 0) {
        const error = {
          code: '204',
          message: 'No results found for: ' + term,
        };
        setError(error);
        setHasError(true);
      } else {
        console.log(response.data);

        setVideo(response.data.items[0]);
        setVideos(response.data.items);
        setHasError(false);
      }
    } catch (error) {
      setError(error);
      setHasError(true);
    }
  }, []);

  const onSelectedVideo = useCallback((vid) => {
    setVideo(vid);
  }, []);

  return (
    <div className="ui container">
      <SearchBar onSubmit={onSearchSubmit} />
      {videos.length > 0 ? (
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
      ) : (
        <div className="ui center aligned header">
          <div className="ui active centered inline text loader">
            Waiting for user input...
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
