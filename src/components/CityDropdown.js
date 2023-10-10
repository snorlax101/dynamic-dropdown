import React from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions/actions';
import './dropdown.css';

const CityDropdown = ({ cities, selectedCities, selectCity }) => {
  const handleCityChange = (e) => {
    selectCity(e.target.value);
  };

  return (
    <div className="container">
      <div className="dropdown-container">
      <select multiple value={selectedCities} onChange={handleCityChange}>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedCountry = state.data.find(
    (country) => country.country === state.selectedCountry
  );

  console.log('Selected Country Object/CityDropdown: ', selectedCountry);

  const states = selectedCountry ? selectedCountry.states : [];

  console.log('States/CityDropdown:',states);

  const selectedState = states
    ? states.find(
        (states) => states.stateName === state.selectedState
      )
    : null;

  console.log('Selected State Object/CityDropdown: ', selectedState);


  const cities = selectedState ? selectedState.city : [];

  return {
    cities,
    selectedCities: state.selectedCities,
  };
};

export default connect(mapStateToProps, { selectCity })(CityDropdown);
