import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createStackNavigator();

function IDStackNav(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default IDStackNav;
