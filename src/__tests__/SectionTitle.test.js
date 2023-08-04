import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SectionTitle from '../components/SectionTitle';

describe('The SectionTitle component', () => {
  test('should render correctly into the DOM', () => {
    const { sectionTitleComponent } = render(
      <SectionTitle title="STATS BY CONTINENTS" />,
    );
    expect(sectionTitleComponent).toMatchSnapshot();
  });

  test('should render with the text: STATS BY COUNTRIES', () => {
    const longTitle = 'STATS BY COUNTRIES';
    render(<SectionTitle title={longTitle} />);
    const sectionTitle = screen.getByText(longTitle);
    expect(sectionTitle).toBeInTheDocument();
  });
});
