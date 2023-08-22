import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import AppBar from './components/AppBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AppBar'
      >
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
        />
        <Stack.Screen 
          name='AppBar'
          component={AppBar}
          options={{
            title:"E-commerce Store"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


