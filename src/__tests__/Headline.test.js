import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Headline from '../components/Headline';
import continentImages from '../data/continentImages';

describe('The Headline component', () => {
  test('should render correctly into the DOM', () => {
    const { headlineComponent } = render(
      <Headline
        srcImg={continentImages.Asia}
        name="Asia"
        information={[{ stats: '224,317', text: 'cases' }]}
      />,
    );
    expect(headlineComponent).toMatchSnapshot();
  });

  test('should render the text: Europe with an empty array in the information prop and no image', () => {
    const props = {
      srcImg: 'no-image',
      name: 'Europe',
      information: [],
    };
    render(<Headline srcImg={props.srcImg} name={props.name} information={props.information} />);
    const headline = screen.getByText('Europe');
    expect(headline).toBeInTheDocument();
  });

  test('should render the text: South America with 3 elements in the information prop array', () => {
    render(
      <Headline
        srcImg={continentImages['South America']}
        name="South America"
        information={[
          { stats: '68,905,921', text: 'total cases' },
          { stats: '1,359,165', text: 'deaths' },
          { stats: '66,504,727', text: 'recovered' },
        ]}
      />,
    );
    const headline = screen.getByText('South America');
    expect(headline).toBeInTheDocument();
  });
});
