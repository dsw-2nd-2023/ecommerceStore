import { Button } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";


const Tab = createBottomTabNavigator();

const AppBar = () => {
    return ( 
        <Tab.Navigator
            initialRouteName="HomeScreen"
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Home"
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel:"Cart"
                }}
            />
        </Tab.Navigator>
     );
}
 
export default AppBar;