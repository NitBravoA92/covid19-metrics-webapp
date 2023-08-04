import continentsReducer, { getAllContinents } from '../redux/continents/continentsSlice';
import { fakeContinentData, expectedContinentData } from '../data/testsData';

describe('The continentsSlice', () => {
  test('should return the initial state of continents on first run', () => {
    const nextState = continentsReducer(undefined, {});
    expect(nextState).toEqual({
      continents: [],
      totalCases: '',
      isLoading: false,
      error: null,
    });
  });

  test('should set isLoading to true when the action is getAllContinents.pending', async () => {
    const nextState = continentsReducer(undefined, {
      type: getAllContinents.pending,
    });
    expect(nextState.isLoading).toBe(true);
  });

  test('should set isLoading to false and continents to the payload when the action is getAllContinents.fulfilled', async () => {
    const nextState = continentsReducer(undefined, {
      type: getAllContinents.fulfilled,
      payload: fakeContinentData,
    });
    expect(nextState.isLoading).toBe(false);
    expect(nextState.continents).toEqual(expectedContinentData);
    expect(nextState.totalCases).toBe('1,391,219,996');
  });
});
