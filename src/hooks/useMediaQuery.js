import React, { useEffect, useState } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
  
      mediaQuery.addListener((mql) => {
        setMatches(mql.matches);
      });
  
      setMatches(mediaQuery.matches);
    }, [query]);
  
    return matches;
}

export default useMediaQuery