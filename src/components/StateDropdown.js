import React from 'react';
import { connect } from 'react-redux';
import { selectState } from '../actions/actions';
import './dropdown.css';

const StateDropdown = ({ states, selectedState, selectState }) => {
  return (
    <div className="container">
      <div className="dropdown-container">
        <select
          value={selectedState}
          onChange={(e) => selectState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.id} value={state.stateName}>
              {state.stateName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  // Find the selected country
  const selectedCountry = state.data.find(
    (country) => country.country === state.selectedCountry
  );

  // Log the selectedCountry object
  console.log('Selected Country Object/StateDropDown: ', selectedCountry);

  // Extract states if the selected country is found
  const states = selectedCountry ? selectedCountry.states : [];

  // Log the states array
  console.log('States/StateDropDown: ', states);

  return {
    states,
    selectedState: state.selectedState,
  };
};


export default connect(mapStateToProps, { selectState })(StateDropdown);
