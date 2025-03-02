import React from 'react';
import {StyleSheet, View} from 'react-native';
import Color from '../../Utils/Color';

interface ProgressBarProps {
  progress?: number;
  testID?: string;
}
function ProgressBar({progress = 10}: ProgressBarProps): React.JSX.Element {
  progress = progress > 100 ? 100 : progress;
  return (
    <View style={styles.container}>
      <View
        testID="progress-bar-fill"
        style={[styles.subContainer, {width: `${progress}%`}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 15,
    borderRadius: 99,
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
  subContainer: {
    height: '100%',
    backgroundColor: Color.themeColor,
    borderTopRightRadius: 99,
    borderBottomRightRadius: 99,
  },
});

export default ProgressBar;
