import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://disease.sh/v3/covid-19/countries';

const actionName = 'countries/getAllCountries';

export const getAllCountries = createAsyncThunk(
  actionName,
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

export default countriesSlice.reducer;
