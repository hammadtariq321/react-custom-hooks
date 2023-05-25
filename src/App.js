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
import Button from './elements/Button';
function App() {


  return (
    <div className="App">

      <LocalStorage />
      <OutsideClick />
      <MediaQuery />
      <Toggle />
      <DocumentTitle />
      <LocationHook/>
      <Button>Hello world</Button>

    </div>
  );
}

export default App;
