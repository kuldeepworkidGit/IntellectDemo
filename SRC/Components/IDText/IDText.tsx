import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import Color from '../../Utils/Color';

export interface RATextProps extends TextProps {
  value: string;
  style?: TextStyle | TextStyle[];
}

function IDText(props: RATextProps): React.JSX.Element {
  const {value, style, ...rest} = props;

  return (
    <Text style={[styles.container, style]} {...rest}>
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    color: Color.themeColor,
  },
});

export default IDText;
