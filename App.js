import AppBar from './components/AppBar';
import { createContext, useState } from 'react';
import ProductDetails from './screens/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const CartContext = createContext();


export default function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
    setItemsCount(itemsCount + 1);
  }

  const removeFromCart = (item) => {
    //challange: remove the item from cart
  }

  const increaseQuantity = (item) => {
    //challange: increase the quantity of the item
    // also increase the total price
  }

  const decreaseQuantity = (item) => {
    //challange: decrease the quantity of the item 
    // if quantity is 1, remove the item from cart
    // also decrease the total price

  }

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setItemsCount(0);
  }

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, clearCart, itemsCount }}>
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
    </CartContext.Provider>
  );
}


