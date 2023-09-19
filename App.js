import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentRegistration from './screens/StudentRegistration';
import RegistrationSuccess from './screens/RegistrationSuccess';
import TabNavigator from './screens/TabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudentRegistration">
        <Stack.Screen name="StudentRegistration" component={StudentRegistration} />
        <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccess} />
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
