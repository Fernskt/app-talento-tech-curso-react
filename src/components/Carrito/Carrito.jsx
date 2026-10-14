import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { parsearPrecio } from "../../context/parsearPrecio";
import styles from "./Carrito.module.css";

export function Carrito() {
    const { cart, removeFromCart, clearCart, totalPrecio, totalItems } = useCart();

    if (cart.length === 0) {
        return (
            <section className={styles.carrito}>
                <h2 className={styles.titulo}>Carrito</h2>
                <div className={styles.vacio}>
                    <span className={styles.iconoVacio} aria-hidden="true">🛒</span>
                    <p>Tu carrito está vacío.</p>
                    <Link to="/productos" className={styles.seguir}>Ir a productos</Link>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.carrito}>
            <h2 className={styles.titulo}>Carrito</h2>
            <div className={styles.layout}>
                <ul className={styles.lista}>
                    {cart.map((item) => (
                        <li key={item.id} className={styles.item}>
                            <img src={item.imagen} alt={item.nombre} className={styles.imagen} />
                            <div className={styles.info}>
                                <span className={styles.nombre}>{item.nombre}</span>
                                <p className={styles.detalle}>
                                    {item.cantidad} x {item.precio}
                                </p>
                                <p className={styles.subtotal}>
                                    ${(parsearPrecio(item.precio) * item.cantidad).toFixed(2)}
                                </p>
                            </div>
                            <button
                                type="button"
                                className={styles.quitar}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Quitar
                            </button>
                        </li>
                    ))}
                </ul>

                <aside className={styles.resumen} aria-label="Resumen de compra">
                    <h3 className={styles.resumenTitulo}>Resumen</h3>
                    <div className={styles.fila}>
                        <span>Productos</span>
                        <span>{totalItems}</span>
                    </div>
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>${totalPrecio.toFixed(2)}</span>
                    </div>
                    <Link to="/productos" className={styles.seguir}>Seguir comprando</Link>
                    <button type="button" className={styles.vaciar} onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </aside>
            </div>
        </section>
    );
}
