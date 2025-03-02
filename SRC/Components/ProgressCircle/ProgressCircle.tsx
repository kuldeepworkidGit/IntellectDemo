import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import IDText from '../IDText';

interface ProgressCircleProps {
  change: number;
  percentage: number;
  title: string;
}
function ProgressCircle(props: ProgressCircleProps): React.JSX.Element {
  const {change, percentage, title} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={100}
          width={10}
          backgroundWidth={10}
          fill={percentage}
          tintColor="#ff0000"
          tintColorSecondary="#00ff00"
          backgroundColor={'#d9d9d9'}
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        />
        <View style={styles.textContainer}>
          <IDText value={percentage} style={styles.score} />

          <IDText
            value={`(${change})`}
            style={{...styles.change, ...{color: change < 0 ? 'red' : 'green'}}}
          />
        </View>
        {/* Label */}
        <Text>
          <IDText value={percentage} style={styles.bold} />
          <IDText value={' out of 100'} style={styles.label1} />
        </Text>

        <IDText value={title} style={styles.label} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  textContainer: {
    position: 'absolute',
    top: 25,
    alignItems: 'center',
  },
  score: {fontSize: 22, fontWeight: 'bold'},
  change: {fontSize: 14, marginTop: -2},
  label: {marginTop: 5, fontSize: 16, color: '#333', textAlign: 'center'},
  label1: {marginTop: -15, fontSize: 12, color: '#333'},
  mainContainer: {justifyContent: 'center', alignItems: 'center'},
  bold: {fontWeight: '500', fontSize: 12, color: '#333'},
});

export default ProgressCircle;
