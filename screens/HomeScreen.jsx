import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import products from "../Products";

const HomeScreen = ({ navigation }) => {
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
              />
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
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
  },
});

export default HomeScreen;
