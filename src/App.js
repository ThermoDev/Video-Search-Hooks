import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';

const App = () => {
  return (
    <div className="ui container">
      <SearchBar />
      <VideoList />
      <VideoDetail />
      <VideoItem />
    </div>
  );
};

export default App;
