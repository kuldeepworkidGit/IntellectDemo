import React from 'react';
import {
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import IDText from '../IDText/IDText';
import Color from '../../Utils/Color';
import {IconNotification} from '../../Assets/Icons';

interface RAButtonProps extends PressableProps {
  title: string;
  style?: ViewStyle;
}
export function IDButton(props: RAButtonProps): React.JSX.Element {
  const {title, style, ...rest} = props;

  return (
    <Pressable style={[styles.container, style]} {...rest}>
      <Image
        source={IconNotification}
        style={styles.icon}
        tintColor={Color.white}
      />
      <IDText value={title} style={styles.title} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 99,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Color.white,
    textAlign: 'center',
    marginLeft: 5,
    fontWeight: '500',
  },
  icon: {
    height: 20,
    width: 20,
  },
});
