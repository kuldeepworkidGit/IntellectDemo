import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import IDBottomTabs from './SRC/Navigation/BottomTabs';
import Color from './SRC/Utils/Color';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Color.white,
    },
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={backgroundStyle} />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavigationContainer theme={navTheme}>
        <IDBottomTabs />
      </NavigationContainer>
      <SafeAreaView style={styles.bottomSafeArea} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSafeArea: {
    backgroundColor: Color.themeColor,
  },
});

export default App;
