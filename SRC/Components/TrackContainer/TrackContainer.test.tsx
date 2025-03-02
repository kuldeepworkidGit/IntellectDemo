import React from 'react';
import {render} from '@testing-library/react-native';
import TrackContainer from '../TrackContainer';
import Strings from '../../Utils/Strings';
import {IconFire} from '../../Assets/Icons';
import { StyleSheet } from 'react-native';

describe('TrackContainer Component', () => {
  it('renders text correctly', () => {
    const {getByText} = render(<TrackContainer />);
    expect(getByText(Strings.finish_to_stay_calmer)).toBeTruthy();
    expect(getByText(Strings.people_doing_session)).toBeTruthy();
  });

  it('renders the progress bar with correct progress', () => {
    const {getByTestId} = render(<TrackContainer />);
    const progressBar = getByTestId('progress-bar-fill');

    // Flatten the style array to find the width property
    const style = StyleSheet.flatten(progressBar.props.style);

    expect(style.width).toBe('20%');
  });

  it('renders the fire icon correctly', () => {
    const {getByTestId} = render(<TrackContainer />);
    const image = getByTestId('fire-icon');
    expect(image.props.source).toBe(IconFire);
  });
});
