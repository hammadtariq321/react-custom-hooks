import logo from './logo.svg';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import { useRef, useState } from 'react';
import useOutsideClick from './hooks/useOutsideClick';
import LocalStorage from './components/LocalStorage';
import OutsideClick from './components/OutsideClick';
import MediaQuery from './components/MediaQuery';
import Toggle from './components/Toggle';
import DocumentTitle from './components/DocumentTitle';
import LocationHook from './components/LocationHook';

function App() {


  return (
    <div className="App">

      <LocalStorage />
      <OutsideClick />
      <MediaQuery />
      <Toggle />
      <DocumentTitle />
      <LocationHook/>

    </div>
  );
}

export default App;
