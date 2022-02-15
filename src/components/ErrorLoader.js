import React from 'react';

const ErrorLoader = ({ error, hasError }) => {
  return (
    <div className="ui center aligned header">
      {hasError ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="ui active centered inline text loader">
          Waiting for user input...
        </div>
      )}
    </div>
  );
};

export default ErrorLoader;
