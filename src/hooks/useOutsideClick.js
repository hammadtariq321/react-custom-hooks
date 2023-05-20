import React, { useEffect, useRef } from 'react'

const useOutsideClick = (ref, onClickOutside) => {

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref, onClickOutside]);
    

}

export default useOutsideClick  