import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import continentsReducer, {
  getAllContinents,
} from '../redux/continents/continentsSlice';
import { fakeContinentData, fakeCountriesData } from '../data/testsData';
import countriesReducer, { getAllCountries } from '../redux/countries/countriesSlice';
import CountryStats from '../pages/CountryStats';

describe('The CountryStats page component', () => {
  let store;

  beforeEach(async () => {
    const continentState = continentsReducer(undefined, {
      type: getAllContinents.fulfilled,
      payload: fakeContinentData,
    });
    const countriesState = countriesReducer(undefined, {
      type: getAllCountries.fulfilled,
      payload: fakeCountriesData,
    });
    const thunkMiddleware = [thunk];
    const mockStore = configureStore(thunkMiddleware);
    const initialStateContinents = continentState;
    const initialState = countriesState;
    store = mockStore({
      continents: initialStateContinents,
      countries: initialState,
    });
    store.dispatch(getAllContinents());
    store.dispatch(getAllCountries());
  });

  test('should render correctly into the DOM', async () => {
    const { CountryStatsComponent } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Europe/Albania']}>
          <Routes>
            <Route path=":continentName/:countryName" element={<CountryStats />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(CountryStatsComponent).toMatchSnapshot();
  });

  test('should render the third page of the app with the fake data of Albania country: Name, Cases and deaths', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Europe/Albania']}>
          <Routes>
            <Route path=":continentName/:countryName" element={<CountryStats />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const countryNameAlbania = screen.getByText('Albania');
    const countryCases = screen.getByText('334,726');
    const countryDeaths = screen.getByText('3,602');

    expect(countryNameAlbania).toBeInTheDocument();
    expect(countryCases).toBeInTheDocument();
    expect(countryDeaths).toBeInTheDocument();
  });
});
