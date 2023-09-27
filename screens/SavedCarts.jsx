import { db } from "../firebase";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Application from 'expo-application';
import { collection, onSnapshot, query } from "firebase/firestore";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SavedCarts = () => {

    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        const q = query(collection(db, `carts/${Application.androidId}/usercarts`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() })
            });
            setcartItems(data)
        });

        () => unsubscribe()

    }, [])


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.item}
                        onPress={() => {
                            //navigation.navigate("CartItemDetails", { product: item });
                            console.log(item.id)
                        }}
                    >
                        <>
                            <Text style={styles.item.text}>Cart Id: <Text style={styles.item.text2}>{item.id}</Text> </Text>
                            <Text style={styles.item.text}>Cart Total: <Text style={styles.item.text2}>{`R ${item.total.toFixed(2)}`}</Text> </Text>
                            <Text style={
                                { fontSize: 18, fontWeight: "bold" }
                            }>Cart Items:</Text>
                            <ScrollView style={styles.scroll}>
                                {cartItems && item.items.map((cart, i) => <Text key={cart.id} style={styles.name}>{i + 1}. {cart.name}</Text>)}
                            </ScrollView>
                        </>
                        <MaterialCommunityIcons
                name="delete"
                size={30}
                color="green"
                style={{
                  padding: 10,
                }}
                onPress={() => console.log("Hi Karabo")}
              />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text>No Saved Carts</Text>}
            />
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
    item: {
        padding: 10,
        margin: 10,
        borderColor: "grey",
        borderWidth: 1,
        backgroundColor: "#D4FCC3",
        text: {
            fontSize: 18, fontWeight: "bold",
        },
        text2: {
            color: "green",
            fontSize: 18, fontWeight: "bold",
        },
    },
    name: {
        fontSize: 16
    },
    scroll: {
        paddingLeft: 20,
        maxHeight: 100
    }
});

export default SavedCarts;
