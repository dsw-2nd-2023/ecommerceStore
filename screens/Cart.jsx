import {
  Text,
  View,
  Image,
  Button,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet,
  ToastAndroid,
} from "react-native";

import { useContext } from "react";

import { CartContext } from "../CartCxt";

import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import { db } from "../firebase";
import * as Application from 'expo-application';
import { addDoc, collection } from "firebase/firestore";

const Cart = ({ navigation }) => {

  const { total, cart, clearCart } = useContext(CartContext);

  const saveCart = async () => {
    if (cart.length) {
      const docRef = await addDoc(collection(db, `carts/${Application.androidId}/usercarts`), { cart });
      return ToastAndroid.show("Saved successfully" + docRef.id, ToastAndroid.LONG)
    }

    ToastAndroid.show("Can not save empty cart", ToastAndroid.LONG)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.product.component}>
              <Pressable
                onPress={() => {
                  navigation.navigate("ProductDetails", {
                    product: item,
                    from: "Cart",
                  });
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.product.image}
                />
              </Pressable>
              <View>
                <Text style={styles.product.name}>{item.name}</Text>
                <Text style={styles.product.price}>{item.price}</Text>
              </View>
              <View>
                <Text style={{ textAlign: "center" }}>Quantity:</Text>
                <View style={styles.flex}>
                  <AntDesign name="minus" size={24} color="black" />
                  <Text style={styles.product.quantity}>{item.quantity}</Text>
                  <AntDesign name="plus" size={24} color="black" />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                No items in cart
              </Text>
            </View>
          }
          ListHeaderComponent={() => {
            return (
              <>
                {total ? (
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      Total: {total}
                    </Text>
                  </View>
                ) : null}
              </>
            );
          }}
          ListFooterComponent={() => (
            <View>
              {total ? (
                <View>
                  <Button
                    title="Clear Cart"
                    color="red"
                    onPress={() => {
                      clearCart();
                    }}
                  />
                  <Button
                    title="Save Cart"
                    color="red"
                    onPress={() => {
                      saveCart();
                    }}
                  />
                </View>
              ) : null}
            </View>
          )}
        />
      </View>
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
