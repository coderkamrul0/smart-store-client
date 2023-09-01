import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {};
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const itemCount = Object.keys(cartItems).length;
    setCartItemCount(itemCount);
  }, [cartItems]);

  const updateCartItems = (productId, quantity) => {
    const newCartItems = { ...cartItems };

    if (newCartItems[productId]) {
      newCartItems[productId] += quantity;
    } else {
      newCartItems[productId] = quantity;
    }

    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const addItemToCart = (productId, quantity) => {
    const newCartItems = { ...cartItems };
  
    if (newCartItems[productId]) {
      newCartItems[productId] += quantity;
    } else {
      newCartItems[productId] = quantity;
    }
  
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  
  

  const addToCart = (productId) => {
    updateCartItems(productId, 1);
  };

  const removeFromCart = (productId) => {
    if (cartItems[productId]) {
      updateCartItems(productId, -1);
    }
  };

  const increaseQuantity = (productId) => {
    updateCartItems(productId, 1);
  };

  const decreaseQuantity = (productId) => {
    if (cartItems[productId] > 1) {
      updateCartItems(productId, -1);
    }
  };

  const deleteItem = (productId) => {
    const newCartItems = { ...cartItems };
    delete newCartItems[productId];

    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        clearCart,
        cartItemCount,
        addItemToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
