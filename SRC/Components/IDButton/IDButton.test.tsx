import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {IDButton} from '.';
import {IconNotification} from '../../Assets/Icons';

describe('IDButton Component', () => {
  it('renders correctly with a title', () => {
    const {getByText} = render(<IDButton title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('triggers onPress event when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <IDButton title="Press Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles correctly', () => {
    const {getByTestId} = render(
      <IDButton title="Styled Button" style={{backgroundColor: 'blue'}} />,
    );
    const buttonElement = getByTestId('id-button'); // Fetch the Pressable
    expect(buttonElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({backgroundColor: 'blue'}),
      ]),
    );
  });

  it('renders icon correctly', () => {
    const {getByTestId} = render(<IDButton title="With Icon" />);
    const image = getByTestId('id-button-icon');
    expect(image.props.source).toBe(IconNotification);
    expect(image.props.style).toEqual(
      expect.objectContaining({height: 20, width: 20}),
    );
  });
});
