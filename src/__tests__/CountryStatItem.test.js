import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CountryStatItem from '../components/CountryStatItem';

describe('The CountryStatItem component', () => {
  test('should render correctly into the DOM', () => {
    const { CountryStatItemComponent } = render(
      <CountryStatItem title="cases" amount="9,106" />,
    );
    expect(CountryStatItemComponent).toMatchSnapshot();
  });

  test('should render the text: recovered and the number of recovered people: 36,366', () => {
    render(
      <CountryStatItem title="recovered" amount="36,366" />,
    );
    const CountryStatItemTitle = screen.getByText(/recovered/i);
    const CountryStatItemCases = screen.getByText(/36,366/i);

    expect(CountryStatItemTitle).toBeInTheDocument();
    expect(CountryStatItemCases).toBeInTheDocument();
  });
});
