
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
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
