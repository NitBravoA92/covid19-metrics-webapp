import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://disease.sh/v3/covid-19/countries';

const actionName = 'countries/getAllCountries';

export const getAllCountries = createAsyncThunk(
  actionName,
  async (thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  countries: [],
  countriesByContinent: [],
  isLoading: false,
  error: null,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountriesByContinent: (state, action) => {
      const continent = action.payload;
      state.countriesByContinent = state.countries.filter(
        (country) => country.continent === continent,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload.map((country, index) => ({
          id: index + 1,
          continent: country.continent,
          name: country.country,
          flag: country.countryInfo.flag,
          population: country.population,
          cases: country.cases,
          todayCases: country.todayCases,
          deaths: country.deaths,
          todayDeaths: country.todayDeaths,
          recovered: country.recovered,
          todayRecovered: country.todayRecovered,
          active: country.active,
          critical: country.critical,
          tests: country.tests,
        }));
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { getCountriesByContinent } = countriesSlice.actions;
export default countriesSlice.reducer;
