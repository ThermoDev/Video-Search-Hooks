import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import ErrorLoader from './components/ErrorLoader';
import ResultsDisplay from './components/ResultsDisplay';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY.toString()}`; /* Replace with your own API key from the YouTube API. */

const App = () => {
  const [error, setError] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [video, setVideo] = useState([]);
  const [videos, setVideos] = useState([]);

  const onSearchSubmit = useCallback(async (term) => {
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
      <h1 className="ui center aligned header">
        React App - YouTube Search - Hooks
      </h1>

      <SearchBar onSubmit={onSearchSubmit} />

      {videos.length > 0 && !hasError ? (
        <ResultsDisplay
          video={video}
          videos={videos}
          onSelectedVideo={onSelectedVideo}
        />
      ) : (
        <ErrorLoader hasError={hasError} error={error} />
      )}
    </div>
  );
};

export default App;
