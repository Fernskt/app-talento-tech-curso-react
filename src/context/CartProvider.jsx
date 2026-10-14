import { useState } from 'react';
import { CartContext } from './CartContext';
import { parsearPrecio } from './parsearPrecio';


export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidad = 1) => {
        setCart((prev) => {
            const existente = prev.find((item) => item.id === producto.id);
            if (existente) {
                const nuevaCantidad = Math.min(existente.cantidad + cantidad, producto.stock);
                return prev.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: nuevaCantidad } : item
                );
            }
            return [...prev, { ...producto, cantidad: Math.min(cantidad, producto.stock) }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrecio = cart.reduce((acc, item) => acc + parsearPrecio(item.precio) * item.cantidad, 0);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrecio }}
        >
            {children}
        </CartContext.Provider>
    );
}
