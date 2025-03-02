import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import MorningComp from '../../Components/MorningComp/MorningComp';
import TrackContainer from '../../Components/TrackContainer/TrackContainer';
import TaskBox, {TitleContainer} from '../../Components/TaskBox';
import Strings from '../../Utils/Strings';
import {ImgCup, ImgMoon, ImgSun} from '../../Assets/Icons';
import {
  AFTERNOON_ARRAY,
  EVENING_ARRAY,
  MORNING_ARRAY,
} from '../../Utils/DummyData';
import {Spacing} from '../../Utils/Topology';
import IDText from '../../Components/IDText';

function DailyScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MorningComp />
      <TrackContainer />
      <View style={styles.subContainer}>
        <TitleContainer
          icon={ImgSun}
          title={Strings.morning}
          style={styles.titleMarginM}
        />
        {MORNING_ARRAY.map((item, index) => (
          <TaskBox
            key={item.id}
            title={item.title}
            desc={item.description}
            style={
              index === MORNING_ARRAY.length - 1
                ? {}
                : {marginBottom: Spacing.spacing_xl}
            }
          />
        ))}

        <TitleContainer
          icon={ImgCup}
          title={Strings.afternoon}
          style={styles.titleMargin}
        />
        {AFTERNOON_ARRAY.map((item, index) => (
          <TaskBox
            key={item.id}
            title={item.title}
            desc={item.description}
            style={
              index === MORNING_ARRAY.length - 1
                ? {}
                : {marginBottom: Spacing.spacing_xl}
            }
          />
        ))}

        <TitleContainer
          icon={ImgMoon}
          title={Strings.evening}
          style={styles.titleMargin}
        />
        {EVENING_ARRAY.map((item, index) => (
          <TaskBox
            key={item.id}
            title={item.title}
            desc={item.description}
            style={
              index === MORNING_ARRAY.length - 1
                ? {}
                : {marginBottom: Spacing.spacing_xl}
            }
          />
        ))}
        <View style={styles.bottomContainer}>
          <View style={styles.divider} />
          <IDText value={`"${Strings.i_advise}"`} style={styles.adviseText} />
          <IDText value={`${Strings.linda_rinn}`} style={styles.adviseText} />
        </View>
      </View>
    </ScrollView>
  );
}

export default DailyScreen;
