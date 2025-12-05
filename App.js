import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// +++ Import Bottom Tab Navigator.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// +++ Import Ionicons for tab icons.
import { Ionicons } from '@expo/vector-icons';

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
    // +++ Add styling to the Stack Header (Background color and Text color).
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' }, // +++ Header background color.
        headerTintColor: '#fff', // +++ Header text color.
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          // +++ Define tab bar icons dynamically based on route name.
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              // +++ Use 'map' icon if focused, 'map-outline' if not.
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Settings') {
              // +++ Use 'settings' icon if focused, 'settings-outline' if not.
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // +++ Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // +++ Set active and inactive colors
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Explore" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}