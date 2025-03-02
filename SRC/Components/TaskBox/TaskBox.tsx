import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  Pressable,
  PressableProps,
} from 'react-native';
import {Spacing} from '../../Utils/Topology';
import Color from '../../Utils/Color';
import {IconPlay} from '../../Assets/Icons';
import IDText from '../IDText';

interface TaskBoxProps extends PressableProps {
  title: string;
  desc: string;
  style?: ViewStyle;
}
interface TitleContainerProps {
  title: string;
  icon: ImageSourcePropType;
  style?: ViewStyle;
  testID?: string;
}
function TaskBox(props: TaskBoxProps): React.JSX.Element {
  const {title, desc, style, ...rest} = props;
  return (
    <Pressable testID="task-box" style={[styles.container, style]} {...rest}>
      <Image
        testID="task-box-icon"
        source={IconPlay}
        style={styles.icon}
        tintColor={Color.green}
      />
      <View style={styles.textContainer}>
        <IDText value={title} />
        <IDText value={desc} style={styles.desc} />
      </View>
    </Pressable>
  );
}

export const TitleContainer = (props: TitleContainerProps) => {
  const {title, icon, style, ...rest} = props;

  return (
    <View style={[styles.titleContainer, style]} {...rest}>
      <Image
        testID="title-container-icon"
        source={icon}
        style={styles.titleContainerIcon}
      />
      <IDText value={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.spacing_xl,
    backgroundColor: Color.lightGrey,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  textContainer: {marginHorizontal: Spacing.spacing_xl},
  desc: {fontSize: 13, color: Color.primaryColor},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainerIcon: {
    width: 22,
    height: 22,
    marginRight: 6,
  },
});

export default TaskBox;
