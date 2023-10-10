import React from 'react';
import './App.css';
import CountryDropdown from './components/CountryDropdown';
import StateDropdown from './components/StateDropdown';
import CityDropdown from './components/CityDropdown';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="App">
      <h1>Dynamic Dropdown</h1>
      <div className="dropdown-container">
        <CountryDropdown />
        <StateDropdown />
        <CityDropdown />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
