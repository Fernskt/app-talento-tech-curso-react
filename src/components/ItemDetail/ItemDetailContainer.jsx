import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";
import styles from "./ItemDetail.module.css";

export function ItemDetailContainer() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [agregado, setAgregado] = useState(false);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProducto(datos.find(p => String(p.id) === id) || null);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>Error al cargar el producto.</p>;
    if (!producto) {
        return (
            <div className={styles.estado}>
                <p>Producto no encontrado.</p>
                <Link to="/productos" className={styles.volver}>Volver a productos</Link>
            </div>
        );
    }

    const incrementar = () => cantidad < producto.stock && setCantidad(cantidad + 1);
    const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

    const handleAgregar = () => {
        addToCart(producto, cantidad);
        setAgregado(true);
    };

    const sinStock = producto.stock === 0;

    return (
        <section className={styles.pagina}>
            <Link to="/productos" className={styles.volver}>← Volver a productos</Link>

            <article className={styles.detalle}>
                <div className={styles.imagenWrap}>
                    <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
                </div>

                <div className={styles.info}>
                    <h2 className={styles.nombre}>{producto.nombre}</h2>
                    <p className={styles.precio}>{producto.precio}</p>
                    <span className={`${styles.stock} ${sinStock ? styles.sinStock : ''}`}>
                        {sinStock ? "Sin stock" : `Stock disponible: ${producto.stock}`}
                    </span>

                    <div className={styles.cantidadWrap}>
                        <span className={styles.etiqueta}>Cantidad</span>
                        <div className={styles.contador}>
                            <button
                                type="button"
                                onClick={decrementar}
                                disabled={cantidad <= 1}
                                aria-label="Disminuir cantidad"
                            >
                                −
                            </button>
                            <span className={styles.valor}>{cantidad}</span>
                            <button
                                type="button"
                                onClick={incrementar}
                                disabled={cantidad >= producto.stock}
                                aria-label="Aumentar cantidad"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={styles.agregar}
                        onClick={handleAgregar}
                        disabled={sinStock}
                    >
                        Agregar al carrito
                    </button>

                    {agregado && (
                        <p className={styles.confirmacion} role="status">
                            Producto agregado. <Link to="/carrito">Ver carrito</Link>
                        </p>
                    )}
                </div>
            </article>
        </section>
    );
}
