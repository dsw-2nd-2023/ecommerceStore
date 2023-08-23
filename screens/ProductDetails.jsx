import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProductDetails = () => {

  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    details: {
      position: "absolute",
      top: 40,
      left: 20,
      zIndex: 100,
      flexDirection: "row",
      alignItems: "center",
    },
  },
  textVisisble: {
    textShadowColor: "grey",
    textShadowRadius: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  details: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    color: "grey",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "65%",
    marginBottom: 20,
  },
});

export default ProductDetails;
