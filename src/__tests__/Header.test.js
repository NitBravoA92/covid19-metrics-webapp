import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../components/Header';

describe('The Header component', () => {
  test('should render correctly into the DOM', () => {
    const navigation = {
      url: '/',
      name: <span>Covid19</span>,
      page: 'Global cases stats',
    };
    const { headerComponent } = render(
      <MemoryRouter>
        <Header navigation={navigation} />
      </MemoryRouter>,
    );
    expect(headerComponent).toMatchSnapshot();
  });

  test('should render the navigation bar with the text: Continent stats', () => {
    const navigation = {
      url: '/',
      name: <BsChevronLeft />,
      page: 'Continent stats',
    };
    render(
      <MemoryRouter>
        <Header navigation={navigation} />
      </MemoryRouter>,
    );
    const headerTitle = screen.getByText(/Continent stats/i);
    expect(headerTitle).toBeInTheDocument();
  });
});
