import React from 'react';
import {render} from '@testing-library/react-native';
import ProgressBar from '.';

describe('ProgressBar Component', () => {
  it('renders correctly with default progress', () => {
    const {getByTestId} = render(<ProgressBar />);
    const progressBar = getByTestId('progress-bar-fill');
    expect(progressBar.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({width: '10%'})]),
    );
  });

  it('renders correctly with custom progress', () => {
    const {getByTestId} = render(<ProgressBar progress={50} />);
    const progressBar = getByTestId('progress-bar-fill');
    expect(progressBar.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({width: '50%'})]),
    );
  });

  it('does not exceed 100% width', () => {
    const {getByTestId} = render(<ProgressBar progress={150} />);
    const progressBar = getByTestId('progress-bar-fill');
    expect(progressBar.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({width: '100%'})]),
    );
  });
});
