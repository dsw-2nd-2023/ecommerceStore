import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Cart = () => {
    return (
        <View style={styles.container}>
          <Text>Cart Screen</Text>
          <StatusBar style="auto" />
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
    });
    
export default Cart;