import { db } from "../firebase";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { collection, doc, setDoc } from "firebase/firestore";
import { Alert, Button, Dimensions, Image, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";

const AddProduct = () => {

  const [newProduct, setnewProduct] = useState({
    name: "", description: "", image: "", price: "0"
  })

  const addProduct = async () => {
    try {
      const newProductRef = doc(collection(db, "products"))
      const data = await setDoc(newProductRef, { ...newProduct, price: parseInt(newProduct.price) })
      //console.log(data);
      ToastAndroid.show("Added new product ", ToastAndroid.SHORT)
      setnewProduct({
        name: "", description: "", image: "", price: "0"
      })
    } catch (error) {
      Alert.alert("Error saving!", JSON.stringify(error))
      //console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.container.details}>
        <View style={styles.inpGroup}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nike Air-Force 2"
            onChangeText={(text) => setnewProduct((prev) => ({ ...prev, name: text }))}
            value={newProduct.name}
          />
        </View>
        <View style={styles.inpGroup}>
          <Text>Description:</Text>
          <TextInput
            style={styles.input}
            placeholder="This is the best shoe ever"
            onChangeText={(text) => setnewProduct((prev) => ({ ...prev, description: text }))}
            value={newProduct.description}
          />
        </View>
        <View style={styles.inpGroup}>
          <Text>Price:</Text>
          <TextInput
            style={styles.input}
            placeholder="4000"
            onChangeText={(text) => setnewProduct((prev) => ({ ...prev, price: text }))}
            value={newProduct.price}
          />
        </View>
        <View style={styles.inpGroup}>
          <Text>Image:</Text>
          <TextInput
            style={styles.input}
            placeholder="https://console.firebase.google.com/u/0.jpg"
            onChangeText={(text) => setnewProduct((prev) => ({ ...prev, image: text }))}
            value={newProduct.image}
          />
        </View>
        <View style={styles.inpGroup}>
          <Button title="Save" onPress={addProduct} />
        </View>
      </View>
      {/* <View style={styles.product.details}>
        <Image source={{ uri: newProduct.image !== "" ? newProduct.image : "https://placehold.co/600x400" }} style={styles.product.image} />
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
              {newProduct.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {newProduct.price}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="cart-arrow-down"
            size={30}
            color="green"
            style={{
              padding: 10,
            }}
          />
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 20,
    flexDirection: "column",
    details: {
      flexDirection: "column",
    },
  },
  inpGroup: {
    paddingVertical: 10
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 5
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
      alignnewProducts: "center",
      width: "100%",
      paddingHorizontal: 10,
    },
  }
});

export default AddProduct;
