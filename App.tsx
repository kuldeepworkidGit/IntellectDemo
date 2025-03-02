import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
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
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavigationContainer theme={navTheme}>
        <IDBottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
