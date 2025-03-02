import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ExploreScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
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

export default ExploreScreen;
