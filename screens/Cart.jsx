import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet,
} from "react-native";

const Cart = () => {
  
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  product: {
    component: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
      width: Dimensions.get("window").width,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
    },
    price: {
      fontSize: 20,
      fontWeight: "bold",
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: "contain",
    },
    quantity: {
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
    },
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Cart;
