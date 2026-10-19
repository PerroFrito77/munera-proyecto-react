import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEFAULT_USER = {
  nombre: "Santiago Osorno",
  correo: "santiago@turtleinc.com",
  telefono: "3001234567",
  avatar: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg",
  caparazones: 520,
  metodosPago: [
    {
      id: "card-1",
      tipo: "Nequi",
      titular: "Santiago Osorno",
      numero: "**** **** **** 4589",
      vence: "08/29",
      verificado: true
    }
  ]
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("turtleUser");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load user from localStorage", e);
    }
    return DEFAULT_USER;
  });

  useEffect(() => {
    try {
      localStorage.setItem("turtleUser", JSON.stringify(user));
    } catch (e) {
      console.error("Error saving user to localStorage", e);
    }
  }, [user]);

  const updateUser = (data) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  const addPaymentMethod = (card) => {
    const newCard = {
      id: "card-" + Date.now(),
      tipo: card.tipo || "Tarjeta de Crédito / Débito",
      titular: card.titular,
      numero: card.numero ? `**** **** **** ${card.numero.slice(-4)}` : "**** **** **** 1234",
      vence: card.vence || "12/28",
      verificado: false
    };
    setUser(prev => ({
      ...prev,
      metodosPago: [...prev.metodosPago, newCard]
    }));
  };

  const removePaymentMethod = (id) => {
    setUser(prev => ({
      ...prev,
      metodosPago: prev.metodosPago.filter(c => c.id !== id)
    }));
  };

  const verifyPaymentMethod = (id) => {
    setUser(prev => ({
      ...prev,
      metodosPago: prev.metodosPago.map(c => c.id === id ? { ...c, verificado: true } : c)
    }));
  };

  const redeemPoints = (amount) => {
    if (user.caparazones >= amount) {
      setUser(prev => ({
        ...prev,
        caparazones: prev.caparazones - amount
      }));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        addPaymentMethod,
        removePaymentMethod,
        verifyPaymentMethod,
        redeemPoints
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
