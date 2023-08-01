import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://disease.sh/v3/covid-19/continents';

const actionName = 'continents/getAllContinents';

export const getAllContinents = createAsyncThunk(actionName, async (thunkAPI) => {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  continents: [],
  selectedContinent: {},
  isLoading: false,
  error: null,
};

export const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  reducers: {
    updateSelectedContinent: (state, action) => {
      const continent = action.payload;
      state.selectedContinent = state.continents.find(
        (continentItem) => continentItem.name === continent,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContinents.pending, (state) => {
        if (state.continents.length === 0) state.isLoading = true;
      })
      .addCase(getAllContinents.fulfilled, (state, action) => {
        if (state.continents.length === 0) {
          state.isLoading = false;
          state.continents = action.payload.map((continent, index) => (
            {
              id: (index + 1),
              name: continent.continent,
              cases: continent.cases,
              deaths: continent.deaths,
              recovered: continent.recovered,
              countriesList: continent.countries.join(','),
            }
          ));
          const [initialSelectedContinent] = state.continents;
          state.selectedContinent = initialSelectedContinent;
        }
      })
      .addCase(getAllContinents.rejected, (state, action) => {
        if (state.continents.length === 0) {
          state.isLoading = false;
          state.error = action.payload;
        }
      });
  },
});

export const { updateSelectedContinent } = continentsSlice.actions;
export default continentsSlice.reducer;
