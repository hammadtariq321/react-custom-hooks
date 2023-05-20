import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

const MediaQuery = () => {
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    return (
      <div>
        <h1>Media Query</h1>
        {isSmallScreen ? "This is a small screen" : "This is a large screen"}
      </div>
    );
}

export default MediaQuery