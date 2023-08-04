import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import CountryItem from '../components/CountryItem';

describe('The CountryItem component', () => {
  test('should render correctly into the DOM', () => {
    const { CountryItemComponent } = render(
      <MemoryRouter>
        <CountryItem image="https://disease.sh/assets/img/flags/af.png" name="Afghanistan" cases="224,317" />
      </MemoryRouter>,
    );
    expect(CountryItemComponent).toMatchSnapshot();
  });

  test('should navigate to the third page when user clicked on Albania country item', () => {
    render(
      <BrowserRouter>
        <CountryItem image="https://disease.sh/assets/img/flags/al.png" name="Albania" cases="334,726" />
      </BrowserRouter>,
    );
    const CountryItemLink = document.querySelector('.country-item');
    fireEvent.click(CountryItemLink);
    expect(window.location.pathname).toBe('/Albania');
  });

  test('should render the text: Algeria and the number of cases', () => {
    render(
      <MemoryRouter>
        <CountryItem image="https://disease.sh/assets/img/flags/dz.png" name="Algeria" cases="271,852" />
      </MemoryRouter>,
    );
    const CountryItemTitle = screen.getByText(/Algeria/i);
    const CountryItemCases = screen.getByText(/271,852 cases/i);

    expect(CountryItemTitle).toBeInTheDocument();
    expect(CountryItemCases).toBeInTheDocument();
  });
});
