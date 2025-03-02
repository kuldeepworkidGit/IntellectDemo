import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CareScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>CareScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CareScreen;
