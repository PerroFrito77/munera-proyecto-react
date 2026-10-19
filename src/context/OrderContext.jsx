import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

const DEFAULT_ORDER = {
  direccion: "Carrera 43A # 1-50, Medellín",
  telefono: "3001234567",
  api: "Torre 2, apto 402",
  aviso: "mensaje",
  seguimiento: "si",
  fecha: new Date().toLocaleDateString("es-CO"),
  step: 2, // 1: Confirmado, 2: En camino, 3: Entregado
  isDelivered: false
};

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(() => {
    try {
      const saved = localStorage.getItem("turtlePedido");
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_ORDER,
          ...parsed,
          step: parsed.step || 2,
          isDelivered: parsed.isDelivered || false
        };
      }
    } catch (e) {
      console.warn("Could not load order from localStorage", e);
    }
    return DEFAULT_ORDER;
  });

  const saveOrder = (newOrderData) => {
    const updated = {
      ...order,
      ...newOrderData,
      step: 2,
      isDelivered: false
    };
    setOrder(updated);
    try {
      localStorage.setItem("turtlePedido", JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving order", e);
    }
  };

  const markAsDelivered = () => {
    const updated = {
      ...order,
      step: 3,
      isDelivered: true
    };
    setOrder(updated);
    try {
      localStorage.setItem("turtlePedido", JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving delivered state", e);
    }
  };

  const resetOrder = () => {
    setOrder(DEFAULT_ORDER);
    try {
      localStorage.removeItem("turtlePedido");
    } catch (e) {
      console.error("Error removing order", e);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        saveOrder,
        markAsDelivered,
        resetOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
