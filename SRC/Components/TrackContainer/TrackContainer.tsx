import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Spacing} from '../../Utils/Topology';
import IDText from '../IDText/IDText';
import Strings from '../../Utils/Strings';
import Color from '../../Utils/Color';
import {IconFire} from '../../Assets/Icons';
import ProgressBar from '../ProgressBar';

function TrackContainer(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <IDText value={Strings.finish_to_stay_calmer} style={styles.text} />
      <ProgressBar progress={20} />
      <View style={styles.subContainer}>
        <Image testID="fire-icon" source={IconFire} style={styles.icon} />
        <IDText
          value={Strings.people_doing_session}
          style={styles.sessionText}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: Spacing.spacing_xl,
    backgroundColor: Color.lightPink,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.spacing_xl,
  },
  text: {marginBottom: 5, fontSize: 15},
  sessionText: {fontSize: 13},
});

export default TrackContainer;
