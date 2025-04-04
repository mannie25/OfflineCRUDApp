import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../screens/ListScreens';
import AddEditScreen from '../screens/AddEditScreens';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="AddEdit" component={AddEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
