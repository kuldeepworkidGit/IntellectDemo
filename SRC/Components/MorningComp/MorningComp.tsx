import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ImgIdea} from '../../Assets/Icons';
import Color from '../../Utils/Color';
import Strings from '../../Utils/Strings';
import IDText from '../IDText/IDText';
import {Spacing} from '../../Utils/Topology';
import { IDButton } from '../IDButton';

function MorningComp(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <IDText value={Strings.good_morning} style={styles.text} />
        <IDText value={Strings.try_activities} style={styles.subTitle} />

        <IDButton title={Strings.set_reminder} style={styles.button} />
      </View>

      <Image source={ImgIdea} style={styles.img} tintColor={Color.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Spacing.spacing_xl,
    alignItems: 'center',
  },
  text: {color: Color.white, fontWeight: '500', fontSize: 20},
  img: {width: 100, height: 100},
  subTitle: {color: Color.textColor, marginVertical: Spacing.spacing_xl},
  subContainer: {
    width: '60%',
    paddingTop: 30,
    paddingBottom: Spacing.spacing_xl,
  },
  button: {width: '80%'},
});

export default MorningComp;
