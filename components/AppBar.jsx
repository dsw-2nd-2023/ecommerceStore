import { useContext } from "react";

import Cart from "../screens/Cart";
import HomeScreen from "../screens/HomeScreen";

import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartContext } from "../CartCxt";


const Tab = createBottomTabNavigator();

const AppBar = () => {
  const { itemsCount } = useContext(CartContext);
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          title: "E-commerce Store",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "green" : "black"}
            />
          ),
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey",
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={focused ? "green" : "black"}
            />
          ),
          tabBarBadge: itemsCount,
          tabBarBadgeStyle: {
            backgroundColor: "white",
            color: "green",
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBar;
