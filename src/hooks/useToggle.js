import React, { useState } from 'react'

const useToggle = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

  const toggle = (key) => {
    setValues((prevToggleStates) => ({
      ...prevToggleStates,
      [key]: !prevToggleStates[key],
    }));
  };

  return [values, toggle];
}

export default useToggle