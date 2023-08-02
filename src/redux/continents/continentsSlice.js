import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import amountFormatter from '../../helper/amountFormatter';

const apiEndpoint = 'https://disease.sh/v3/covid-19/continents';

export const getAllContinents = createAsyncThunk('continents/getAllContinents', async (thunkAPI) => {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getContinent = createAsyncThunk('continents/getContinent', async (continent, thunkAPI) => {
  try {
    const response = await axios.get(`${apiEndpoint}/${continent}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  continents: [],
  selectedContinent: null,
  totalCases: '',
  isLoading: false,
  error: null,
};

export const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllContinents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContinents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.continents = action.payload.map((continent, index) => (
          {
            id: (index + 1),
            name: continent.continent,
            cases: amountFormatter(continent.cases),
            deaths: amountFormatter(continent.deaths),
            recovered: amountFormatter(continent.recovered),
          }
        ));
        state.totalCases = amountFormatter(
          action.payload.reduce((acc, continent) => acc + continent.cases, 0),
        );
      })
      .addCase(getAllContinents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getContinent.fulfilled, (state, action) => {
        const continent = action.payload;
        state.selectedContinent = {
          population: amountFormatter(continent.population),
          cases: amountFormatter(continent.cases),
          deaths: amountFormatter(continent.deaths),
          recovered: amountFormatter(continent.recovered),
          active: amountFormatter(continent.active),
        };
      });
  },
});

export default continentsSlice.reducer;
