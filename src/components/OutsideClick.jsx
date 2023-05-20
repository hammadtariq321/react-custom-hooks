import React, { useRef, useState } from 'react'
import useOutsideClick from '../hooks/useOutsideClick';

const OutsideClick = () => {
    
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [clickDisabled, setClickDisabled] = useState(false);


  const handleClickOutside = () => {
    if (inputValue.trim() !== '') {
        if(clickDisabled) {
            return
        } else {
            // Call your random function here
            console.log('Random function called');
            setClickDisabled(true)
        }
    }
  };

  const updateInputValue = (value) => {
    setInputValue(value)
    setClickDisabled(false)
  }

  useOutsideClick(inputRef, handleClickOutside);
  return (
    <div>
         <h1>Outside Click</h1>
      <div>
        <div>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) =>updateInputValue(e.target.value) }
          />
        </div>
      </div>
    </div>
  )
}

export default OutsideClick