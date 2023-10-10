import { combineReducers } from 'redux';
import {
  SELECT_COUNTRY,
  SELECT_STATE,
  SELECT_CITY,
} from '../actions/actions';

import jsonData from '../data.json';

const initialState = {
  data: jsonData, // An array of countries with states and cities
  selectedCountry: '',
  selectedState: '',
  selectedCities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
        selectedState: '', // Clear selected state when a new country is selected
        selectedCities: [], // Clear selected cities when a new country is selected
      };
    case SELECT_STATE:
      return {
        ...state,
        selectedState: action.payload,
        selectedCities: [], // Clear selected cities when a new state is selected
      };
    case SELECT_CITY:
      const selectedCity = action.payload;
      const selectedCities = state.selectedCities.includes(selectedCity)
        ? state.selectedCities.filter((city) => city !== selectedCity)
        : [...state.selectedCities, selectedCity];
      return {
        ...state,
        selectedCities,
      };
    default:
      return state;
  }
};

export default rootReducer;
