import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProductDetails = ({ navigation, route }) => {
  const product = route.params.product;

  //   console.log(product);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          marginBottom: 25,
          fontSize: 32,
        }}
      >
        Product Details Screen
      </Text>
      <View
        key={product.id}
        onPress={() => {
          navigation.navigate("ProductDetails", { product });
        }}
      >
        <Image
          source={{ uri: product.image }}
          style={{
            width: "100%",
            height: "65%",
            marginBottom: 20,
          }}
        />
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              marginBottom: 15,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            {product.name}
          </Text>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 25,
              fontWeight: "normal",
            }}
          >
            {product.price}
          </Text>
          <ScrollView
            style={{
              height: 100,
            }}
          >
            <Text>{product.Description}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProductDetails;
