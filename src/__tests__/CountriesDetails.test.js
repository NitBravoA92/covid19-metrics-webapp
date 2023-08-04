import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import continentsReducer, {
  getAllContinents,
} from "../redux/continents/continentsSlice";
import { fakeContinentData } from "../data/testsData";
import countriesReducer, { getAllCountries } from '../redux/countries/countriesSlice';
import { fakeCountriesData } from '../data/testsData';
import CountriesDetails from "../pages/CountriesDetails";

describe("The CountriesDetails page component", () => {
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

  test("should render correctly into the DOM", async () => {
    const { countriesDetailsComponent } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Africa']}>
          <Routes>
            <Route path=":continentName" element={<CountriesDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(countriesDetailsComponent).toMatchSnapshot();
  });

  test("should render the second page of the app with the fake data of countries of Asia continent: Afghanistan", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Asia']}>
          <Routes>
            <Route path=":continentName" element={<CountriesDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const countriesItems = document.querySelectorAll(".country-item");
    const continentNameAsia = screen.getByText("Asia");
    const countryName = screen.getByText("Afghanistan");

    expect(countriesItems).toHaveLength(1);
    expect(continentNameAsia).toBeInTheDocument();
    expect(countryName).toBeInTheDocument();
  });

});
