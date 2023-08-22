import AppBar from './components/AppBar';
import { CartContextProvider } from './CartCxt';
import ProductDetails from './screens/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <CartContextProvider>
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
    </CartContextProvider>
  );
}


