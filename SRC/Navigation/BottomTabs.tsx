import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import DailyScreen from '../Screens/DailyScreen';
import {ScreenName} from '../Utils/Constants';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {
  IconDiamond,
  IconDiamondFilled,
  IconGroup,
  IconGroupFilled,
  IconHome,
  IconHomeFilled,
  IconSearch,
  IconUser,
  IconUserFilled,
} from '../Assets/Icons';
import Color from '../Utils/Color';

const Tab = createBottomTabNavigator();

const Icon = (color: string, iconPath: ImageSourcePropType) => (
  <Image source={iconPath} style={styles.icon} tintColor={color} />
);

function IDBottomTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.DAILY}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.white,
        tabBarStyle: {
          backgroundColor: Color.themeColor,
        },
      }}>
      <Tab.Screen
        name={ScreenName.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            Icon(color, focused ? IconHomeFilled : IconHome),
        }}
      />
      <Tab.Screen
        name={ScreenName.EXPLORE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => Icon(color, IconSearch),
        }}
      />
      <Tab.Screen
        name={ScreenName.CARE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            Icon(color, focused ? IconGroup : IconGroupFilled),
        }}
      />
      <Tab.Screen
        name={ScreenName.DAILY}
        component={DailyScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            Icon(color, focused ? IconDiamondFilled : IconDiamond),
        }}
      />
      <Tab.Screen
        name={ScreenName.PROFILE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) =>
            Icon(color, focused ? IconUserFilled : IconUser),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});
export default IDBottomTabs;
