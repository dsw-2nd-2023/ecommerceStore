import { StatusBar } from "expo-status-bar";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.container.details}>
        <Entypo
          name="chevron-left"
          size={24}
          color="grey"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <Text style={styles.textVisisble}>{product.name}</Text>
      </View>

      <View
        key={product.id}
        onPress={() => {
          navigation.navigate("ProductDetails", { product });
        }}
      >
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.details}>
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
            showsVerticalScrollIndicator={false}
            style={{
              height: 130,
            }}
          >
            <Text style={styles.description}>{product.Description}</Text>
          </ScrollView>
          <MaterialCommunityIcons
            name="cart-arrow-down"
            size={30}
            color="green"
            style={{
              padding: 10,
              marginTop: 20,
            }}
          />
        </View>
      </View>
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
