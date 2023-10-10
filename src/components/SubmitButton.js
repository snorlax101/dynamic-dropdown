// src/components/SubmitButton.js
import React from 'react';
import { connect } from 'react-redux';

const SubmitButton = ({ selectedCountry, selectedState, selectedCities }) => {
  const handleSubmit = () => {
    console.log('Selected Country:', selectedCountry);
    console.log('Selected State:', selectedState);
    console.log('Selected City:', selectedCities);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCountry: state.selectedCountry,
  selectedState: state.selectedState,
  selectedCities: state.selectedCities,
});

export default connect(mapStateToProps)(SubmitButton);
