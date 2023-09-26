import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet,
  Alert,
  ToastAndroid,
} from "react-native";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

//import products from "../Products";
import { CartContext } from "../CartCxt";

import { db } from "../firebase";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useFocusEffect(() => {
    //getProducts()
  })

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data(), price: `R ${doc.data().price.toFixed(2)}` })
      });
      setProducts(data)
    });

    ()=> unsubscribe()
    
  }, [])


  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    if (querySnapshot.empty) {
      //ToastAndroid.showWithGravity("No data", ToastAndroid.SHORT, 15)
      return Alert.alert("No data")
    }
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    });

    setProducts(data)
    //console.log(data);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            key={item.id}
            style={styles.product.component}
            onPress={() => {
              navigation.navigate("ProductDetails", { product: item });
            }}
          >
            <Image source={{ uri: item.image }} style={styles.product.image} />
            <View style={styles.product.details}>
              <View
                style={{
                  marginBottom: 10,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                  }}
                >
                  {item.price}
                </Text>
              </View>
              <MaterialCommunityIcons
                name="cart-arrow-down"
                size={30}
                color="green"
                style={{
                  padding: 10,
                }}
                onPress={() => addToCart(item)}
              />
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>No Data</Text>}
      />
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
      borderWidth: 1,
      borderColor: "lightgrey",
      marginBottom: 15,
      width: Dimensions.get("window").width,
    },
    image: {
      width: "100%",
      height: 280,
      marginBottom: 20,
    },
    details: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 10,
    },
  }
});

export default HomeScreen;
