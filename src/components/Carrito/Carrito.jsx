import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { parsearPrecio } from "../../context/parsearPrecio";

export function Carrito() {
    const { cart, removeFromCart, clearCart, totalPrecio } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <h2>Carrito</h2>
                <p>Tu carrito está vacío.</p>
                <Link to="/productos">Ir a productos</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.map((item) => (
                    <li key={item.id} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <img src={item.imagen} alt={item.nombre} width={60} />
                        <div style={{ flex: 1 }}>
                            <strong>{item.nombre}</strong>
                            <p>
                                {item.cantidad} x {item.precio} = $
                                {(parsearPrecio(item.precio) * item.cantidad).toFixed(2)}
                            </p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Quitar</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrecio.toFixed(2)}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}
