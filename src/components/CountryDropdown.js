import React from 'react';
import { connect } from 'react-redux';
import { selectCountry } from '../actions/actions';
import './dropdown.css';

const CountryDropdown = ({ countries, selectedCountry, selectCountry }) => {
  if (!countries) {
    return null; // or display a loading message or empty dropdown
  }

  return (
    <div className="container">
      <div className="dropdown-container">
      <select
        value={selectedCountry}
        onChange={(e) => selectCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.country} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.data, // Make sure this matches your Redux state structure
  selectedCountry: state.selectedCountry,
});

export default connect(mapStateToProps, { selectCountry })(CountryDropdown);
