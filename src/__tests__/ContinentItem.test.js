import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import continentImages from '../data/continentImages';
import ContinentItem from '../components/ContinentItem';

describe('The ContinentItem component', () => {
  test('should render correctly into the DOM', () => {
    const { continentItemComponent } = render(
      <MemoryRouter>
        <ContinentItem image={continentImages.Africa} name="Africa" cases="1000" />
      </MemoryRouter>,
    );
    expect(continentItemComponent).toMatchSnapshot();
  });

  test('should navigate to the second page when user clicked on Australia-Oceania continent item', () => {
    render(
      <BrowserRouter>
        <ContinentItem image={continentImages['Australia-Oceania']} name="Australia-Oceania" cases="1,345,890" />
      </BrowserRouter>,
    );
    const continentItemLink = document.querySelector('.continent-item');
    fireEvent.click(continentItemLink);
    expect(window.location.pathname).toBe('/Australia-Oceania');
  });

  test('should render the text: Europe and the number of cases', () => {
    render(
      <MemoryRouter>
        <ContinentItem image={continentImages.Europe} name="Europe" cases="20,105,600" />
      </MemoryRouter>,
    );
    const continentItemTitle = screen.getByText(/Europe/i);
    const continentItemCases = screen.getByText(/20,105,600 cases/i);

    expect(continentItemTitle).toBeInTheDocument();
    expect(continentItemCases).toBeInTheDocument();
  });
});
