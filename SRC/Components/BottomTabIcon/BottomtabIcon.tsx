import React, {useMemo} from 'react';
import {StyleSheet, ImageSourcePropType, Image} from 'react-native';

interface BottomTabIconProps {
  iconPath: ImageSourcePropType;
  color: string;
}
function BottomTabIcon(props: BottomTabIconProps): React.JSX.Element {
  const {iconPath, color} = props;
  return useMemo(
    () => <Image source={iconPath} style={styles.icon} tintColor={color} />,
    [color, iconPath],
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});

export default BottomTabIcon;
