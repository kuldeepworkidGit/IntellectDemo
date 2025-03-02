import React from 'react';
import {render} from '@testing-library/react-native';
import MorningComp from '../../Components/MorningComp';
import Strings from '../../Utils/Strings';
import {ImgIdea} from '../../Assets/Icons';

describe('MorningComp Component', () => {
  it('renders correctly', () => {
    const {getByText, getByTestId} = render(<MorningComp />);

    // Check if text elements are rendered
    expect(getByText(Strings.good_morning)).toBeTruthy();
    expect(getByText(Strings.try_activities)).toBeTruthy();

    // Check if button is rendered with correct title
    expect(getByText(Strings.set_reminder)).toBeTruthy();

    // Check if image is rendered
    const image = getByTestId('morning-comp-image');
    expect(image.props.source).toBe(ImgIdea);
  });
});
