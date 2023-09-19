import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistrationSuccess from './RegistrationSuccess';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="FirstTab" component={RegistrationSuccess} />
    <Tab.Screen name="SecondTab" component={SecondTabScreen} />
    <Tab.Screen name="ThirdTab" component={ThirdTabScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
