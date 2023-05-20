import React from 'react'
import useToggle from '../hooks/useToggle';

const Toggle = () => {
    const [values, toggle] = useToggle({
        toggle1: false,
        toggle2: false,
      });
    
      return (
        <div>
            <h1>Toggle</h1>
          <button onClick={() => toggle('toggle1')}>
            Toggle 1: {values.toggle1 ? 'ON' : 'OFF'}
          </button>
          <button onClick={() => toggle('toggle2')}>
            Toggle 2: {values.toggle2 ? 'ON' : 'OFF'}
          </button>
        </div>
      );
}

export default Toggle