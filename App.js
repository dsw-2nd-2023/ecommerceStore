import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import AppBar from './components/AppBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator
  //       initialRouteName="HomeScreen"
  //     >
  //       <Tab.Screen
  //         name="HomeScreen"
  //         navigationKey='HomeScreen'
  //         component={HomeScreen}
  //         options={{
  //           tabBarLabel: "Home",
  //           title: "E-commerce Store"
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Cart"
  //         navigationKey='Cart'
  //         component={Cart}
  //         options={{
  //           tabBarLabel: "Cart"
  //         }}
  //       />
  //     </Tab.Navigator>

  //   </NavigationContainer>
  // )


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AppBar'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
        />
        <Stack.Screen 
          name='AppBar'
          component={AppBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


