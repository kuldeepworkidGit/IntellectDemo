import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TaskBox, { TitleContainer } from '.';
import { IconPlay } from '../../Assets/Icons';

describe('TaskBox Component', () => {
  it('renders correctly with title and description', () => {
    const {getByText} = render(
      <TaskBox title="Task Title" desc="Task Description" />,
    );
    expect(getByText('Task Title')).toBeTruthy();
    expect(getByText('Task Description')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <TaskBox
        title="Task"
        desc="Description"
        onPress={onPressMock}
        testID="task-box"
      />,
    );
    fireEvent.press(getByTestId('task-box'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders the icon correctly', () => {
    const {getByTestId} = render(<TaskBox title="Task" desc="Description" />);
    const image = getByTestId('task-box-icon');
    expect(image.props.source).toBe(IconPlay);
  });
});

describe('TitleContainer Component', () => {
  it('renders correctly with title and icon', () => {
    const {getByText, getByTestId} = render(
      <TitleContainer title="Title" icon={IconPlay} testID="title-container" />,
    );
    expect(getByText('Title')).toBeTruthy();
    expect(getByTestId('title-container-icon').props.source).toBe(IconPlay);
  });
});
