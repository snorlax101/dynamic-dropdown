import React from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions/actions';
import Select from 'react-select';
import './dropdown.css';

const CityDropdown = ({ cities, selectedCities, selectCity }) => {
  const handleCityChange = (selectedOptions) => {
    const selectedCityValues = selectedOptions.map((option) => option.value);
    selectCity(selectedCityValues);
  };

  const cityOptions = cities.map((city) => ({
    value: city.id, // Use a unique identifier (e.g., id) as the value
    label: city.name,
  }));

  return (
    <div className="container">
      <div className="dropdown-container">
        <Select
          isMulti
          options={cityOptions}
          value={selectedCities.map((city) => ({ value: city, label: city }))}
          onChange={handleCityChange}
          placeholder="Search or select cities..."
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedCountry = state.data.find(
    (country) => country.country === state.selectedCountry
  );

  const states = selectedCountry ? selectedCountry.states : [];
  const selectedState = states
    ? states.find(
        (states) => states.stateName === state.selectedState
      )
    : null;

  const cities = selectedState ? selectedState.city : [];
  console.log('Cities/CityDropdown: ',cities);

  return {
    cities,
    selectedCities: state.selectedCities,
  };
};

export default connect(mapStateToProps, { selectCity })(CityDropdown);
