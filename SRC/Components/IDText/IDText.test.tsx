import React from 'react';
import {render} from '@testing-library/react-native';
import IDText from '.';
import Color from '../../Utils/Color';

describe('IDText Component', () => {
  it('renders correctly with string value', () => {
    const {getByText} = render(<IDText value="Hello World" />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders correctly with numeric value', () => {
    const {getByText} = render(<IDText value={123} />);
    expect(getByText('123')).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const {getByText} = render(
      <IDText value="Styled Text" style={{fontSize: 20, color: 'red'}} />,
    );
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({fontSize: 20, color: 'red'}),
      ]),
    );
  });

  it('inherits default styles', () => {
    const {getByText} = render(<IDText value="Default Styled Text" />);
    const textElement = getByText('Default Styled Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({fontSize: 16, color: Color.themeColor}),
      ]),
    );
  });
});
