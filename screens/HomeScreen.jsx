import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import products from "../Products";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View>
          {products.map((product) => (
            <Pressable
              key={product.id}
              style={{
                borderWidth: 1,
                borderColor: "lightgrey",
                marginBottom:15
              }}

              onPress={()=>{
                navigation.navigate('ProductDetails',{product:product})
              }}
            >
              <Image
                source={{ uri: product.image }}
                style={{
                  width: 250,
                  height: 250,
                  marginBottom:20
                }}
              />
              <View style={{
                marginBottom:10
              }}>
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
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

export default HomeScreen;
