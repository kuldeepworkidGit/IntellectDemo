import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import DailyScreen from '../../Screens/DailyScreen';
import Strings from '../../Utils/Strings';
import {
  MORNING_ARRAY,
  AFTERNOON_ARRAY,
  EVENING_ARRAY,
} from '../../Utils/DummyData';

describe('DailyScreen Component', () => {
  test('renders DailyScreen correctly', async () => {
    const {getByText} = render(<DailyScreen />);

    // Debug to log the component structure if needed
    // debug();

    // Check if section titles are rendered
    expect(getByText(Strings.morning)).toBeTruthy();
    expect(getByText(Strings.afternoon)).toBeTruthy();
    expect(getByText(Strings.evening)).toBeTruthy();

    // Check if morning tasks are rendered
    MORNING_ARRAY.forEach(item => {
      expect(getByText(item.title)).toBeTruthy();
    });

    // Check if afternoon tasks are rendered
    AFTERNOON_ARRAY.forEach(item => {
      expect(getByText(item.title)).toBeTruthy();
    });

    // Check if evening tasks are rendered
    EVENING_ARRAY.forEach(item => {
      expect(getByText(item.title)).toBeTruthy();
    });

    // Check if quote is displayed
    await waitFor(() => {
      expect(getByText(`"${Strings.i_advise}"`)).toBeTruthy();
      expect(getByText(Strings.linda_rinn)).toBeTruthy();
    });
  });
});
