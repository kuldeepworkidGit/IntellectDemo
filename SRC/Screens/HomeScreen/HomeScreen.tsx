import React from 'react';
import {View} from 'react-native';
import IDText from '../../Components/IDText';
import ProgressCircle from '../../Components/ProgressCircle';
import styles from './styles';
import {GROWTH_ARRAY} from '../../Utils/DummyData';
import Strings from '../../Utils/Strings';

function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <IDText value={Strings.your_area_of_growth} style={styles.title} />
        <View style={styles.subContainer}>
          {GROWTH_ARRAY.map(item => (
            <ProgressCircle
              key={item.id}
              title={item.title}
              percentage={item.percentage}
              change={item.change}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
