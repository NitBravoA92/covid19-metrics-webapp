import { configureStore } from '@reduxjs/toolkit';
import continentsReducer from './continents/continentsSlice';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    continents: continentsReducer,
    countries: countriesReducer,
  },
});

export default store;
