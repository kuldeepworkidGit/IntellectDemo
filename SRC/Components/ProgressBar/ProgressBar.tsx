import React from 'react';
import {StyleSheet, View} from 'react-native';
import Color from '../../Utils/Color';

interface ProgressBarProps {
  progress?: number;
}
function ProgressBar({progress = 10}: ProgressBarProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, {width: `${progress}%`}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 15,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Color.themeColor,
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
