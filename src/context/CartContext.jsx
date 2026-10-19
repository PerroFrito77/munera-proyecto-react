import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const DEFAULT_INITIAL_CART = [
  {
    id: "camisa-hombre",
    name: "Camiseta Turtle INC",
    subtitle: "Camiseta negra",
    price: 199000,
    priceFormatted: "$199.000",
    image: "/imagenes/camisa h (2).png",
    size: "M",
    quantity: 1
  },
  {
    id: "top-mujer",
    name: "Top mujer Turtle INC",
    subtitle: "Top mujer",
    price: 69000,
    priceFormatted: "$69.000",
    image: "/imagenes/topmujer.png",
    size: "S",
    quantity: 1
  }
];

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("carritoTurtle");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.items) && parsed.items.length > 0) {
          return parsed.items;
        }
      }
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
    }
    return DEFAULT_INITIAL_CART;
  });

  useEffect(() => {
    try {
      const total = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      const resumen = {
        total,
        cantidades: items.map(item => item.quantity),
        items
      };
      localStorage.setItem("carritoTurtle", JSON.stringify(resumen));
    } catch (e) {
      console.error("Error saving cart to localStorage", e);
    }
  }, [items]);

  const addToCart = (product, size = "M", quantity = 1) => {
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem = {
          id: product.id,
          name: product.displayName || product.name,
          subtitle: product.category === 'femenina' ? 'Prenda femenina' : 'Prenda masculina',
          price: product.price,
          priceFormatted: product.priceFormatted,
          image: product.images ? product.images[0] : (product.image || ''),
          size: size,
          quantity: quantity
        };
        return [...prevItems, newItem];
      }
    });
  };

  const updateQuantity = (id, size, change) => {
    setItems(prevItems => {
      return prevItems
        .map(item => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (id, size) => {
    setItems(prevItems => prevItems.filter(item => !(item.id === id && item.size === size)));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const totalFormatted = "$" + total.toLocaleString("es-CO");
  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        total,
        totalFormatted,
        totalCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
