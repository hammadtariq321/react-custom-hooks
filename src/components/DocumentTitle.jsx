import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

const DocumentTitle = () => {

    const [title, setTitle] = useState('My App');

    useDocumentTitle(title);
    
    const handleButtonClick = () => {
        setTitle('React Hooks');
    };

  return (
    <div>
      <h1>Document Title</h1>
      <button onClick={handleButtonClick}>Change Title to React Hooks</button>
    </div>
  )
}

export default DocumentTitle