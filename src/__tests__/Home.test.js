import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import continentsReducer, {
  getAllContinents,
} from '../redux/continents/continentsSlice';
import { fakeContinentData } from '../data/testsData';
import Home from '../pages/Home';

describe('The Home page component', () => {
  let store;

  beforeEach(async () => {
    const continentState = continentsReducer(undefined, {
      type: getAllContinents.fulfilled,
      payload: fakeContinentData,
    });
    const thunkMiddleware = [thunk];
    const mockStore = configureStore(thunkMiddleware);
    const initialState = continentState;
    store = mockStore({
      continents: initialState,
    });
    store.dispatch(getAllContinents());
  });

  test('should render correctly into the DOM', async () => {
    const { homeComponent } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );
    expect(homeComponent).toMatchSnapshot();
  });

  test('should render seven continents items with the names: Africa, Asia, North America, South America, Australia-Oceania, Europe and New Fake Continent', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );

    const continentsItems = document.querySelectorAll('.continent-item');
    const continentNameAfrica = screen.getByText('Africa');
    const continentNameAsia = screen.getByText('Asia');
    const continentNameNorthAmerica = screen.getByText('North America');
    const continentNameSouthAmerica = screen.getByText('South America');
    const continentNameAustraliaOceania = screen.getByText('Australia-Oceania');
    const continentNameEurope = screen.getByText('Europe');
    const continentNameNewFakeContinent = screen.queryByText('New Fake Continent');

    expect(continentsItems).toHaveLength(7);
    expect(continentNameAfrica).toBeInTheDocument();
    expect(continentNameAsia).toBeInTheDocument();
    expect(continentNameNorthAmerica).toBeInTheDocument();
    expect(continentNameSouthAmerica).toBeInTheDocument();
    expect(continentNameAustraliaOceania).toBeInTheDocument();
    expect(continentNameEurope).toBeInTheDocument();
    expect(continentNameNewFakeContinent).not.toBeInTheDocument();
  });
});
