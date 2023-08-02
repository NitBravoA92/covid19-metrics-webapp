import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import amountFormatter from '../../helper/amountFormatter';

const apiEndpoint = 'https://disease.sh/v3/covid-19/countries';

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (continent, thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      const allCountries = response.data;
      const countriesByContinent = allCountries.filter(
        (country) => country.continent === continent,
      );
      return countriesByContinent;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload.map((country, index) => ({
          id: index + 1,
          name: country.country,
          flag: country.countryInfo.flag,
          population: amountFormatter(country.population),
          cases: amountFormatter(country.cases),
          todayCases: amountFormatter(country.todayCases),
          deaths: amountFormatter(country.deaths),
          todayDeaths: amountFormatter(country.todayDeaths),
          recovered: amountFormatter(country.recovered),
          todayRecovered: amountFormatter(country.todayRecovered),
          active: amountFormatter(country.active),
          critical: amountFormatter(country.critical),
          tests: amountFormatter(country.tests),
        }));
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default countriesSlice.reducer;
