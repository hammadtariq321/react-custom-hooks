import React from 'react'
import useScrollToTop from '../hooks/useScrollToTop';

const ScrollToTop = () => {
    const { scrollToTop, setScrollToTop } = useScrollToTop();
  return (
    <div>
        <h1>Scroll To Top</h1>
      <button onClick={() => setScrollToTop(true)}>Scroll to Top</button>
    </div>
  )
}

export default ScrollToTop