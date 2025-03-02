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

const TASK_SECTIONS = [
  {
    title: Strings.morning,
    icon: ImgSun,
    data: MORNING_ARRAY,
    style: styles.titleMarginM,
  },
  {
    title: Strings.afternoon,
    icon: ImgCup,
    data: AFTERNOON_ARRAY,
    style: styles.titleMargin,
  },
  {
    title: Strings.evening,
    icon: ImgMoon,
    data: EVENING_ARRAY,
    style: styles.titleMargin,
  },
];

interface Task {
  id: string;
  title: string;
  description: string;
}

const renderTaskList = (tasks: Task[]): React.ReactNode =>
  tasks.map((item, index) => (
    <TaskBox
      key={item.id}
      title={item.title}
      desc={item.description}
      style={
        index !== tasks.length - 1 ? {marginBottom: Spacing.spacing_xl} : {}
      }
    />
  ));

function DailyScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MorningComp />
      <TrackContainer />
      <View style={styles.subContainer}>
        {TASK_SECTIONS.map(({title, icon, data, style}) => (
          <View key={title}>
            <TitleContainer icon={icon} title={title} style={style} />
            {renderTaskList(data)}
          </View>
        ))}

        <View style={styles.bottomContainer}>
          <View style={styles.divider} />
          <IDText value={`"${Strings.i_advise}"`} style={styles.quoteText} />
          <IDText value={Strings.linda_rinn} style={styles.adviseText} />
        </View>
      </View>
    </ScrollView>
  );
}

export default DailyScreen;
