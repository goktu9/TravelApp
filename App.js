import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// +++ Import Bottom Tab Navigator.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// +++ Importing the screens.
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

// +++ Create Stack and Tab objects.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// +++ Define the Stack Navigator component.
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

       {/* +++ Implement Tab Navigator with headerShown: false to avoid double headers */}
       <Tab.Navigator screenOptions={{ headerShown: false }}>

       {/* +++ First Tab: The Stack (Home + Details) */}
       <Tab.Screen name="Explore" component={HomeStack} />
       
       {/* +++ Second Tab: Settings Screen */}
       <Tab.Screen name="Settings" component={SettingsScreen} />
       
     </Tab.Navigator>
    </NavigationContainer>
  );
}