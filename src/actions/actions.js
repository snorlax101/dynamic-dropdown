export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SELECT_STATE = 'SELECT_STATE';
export const SELECT_CITY = 'SELECT_CITY';

export const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export const selectState = (state) => ({
  type: SELECT_STATE,
  payload: state,
});

export const selectCity = (city) => ({
  type: SELECT_CITY,
  payload: city,
});
