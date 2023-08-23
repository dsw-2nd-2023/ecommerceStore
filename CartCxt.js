import { createContext, useState } from "react";

const CartContext = createContext();
const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);

    const addToCart = (item) => {
        setCart([...cart, { ...item, quantity: 1 }]);
        setTotal(total + parseFloat(item.price.replace("R", "").replace(",", "").trim()));
        setItemsCount(itemsCount + 1);
    }

    const removeFromCart = (item) => {
        //challange: remove the item from cart
    }

    const increaseQuantity = (item) => {
        //challange: increase the quantity of the item
        // also increase the total price
    }

    const decreaseQuantity = (item) => {
        //challange: decrease the quantity of the item 
        // if quantity is 1, remove the item from cart
        // also decrease the total price

    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setItemsCount(0);
    }

    return (
        <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, clearCart, itemsCount }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider };