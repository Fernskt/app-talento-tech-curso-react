import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/useCart";

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
            <div>
                <p>Producto no encontrado.</p>
                <Link to="/productos">Volver a productos</Link>
            </div>
        );
    }

    const incrementar = () => cantidad < producto.stock && setCantidad(cantidad + 1);
    const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

    const handleAgregar = () => {
        addToCart(producto, cantidad);
        setAgregado(true);
    };

    return (
        <section>
            <img src={producto.imagen} alt={producto.nombre} width={200} />
            <h2>{producto.nombre}</h2>
            <p>Precio: {producto.precio}</p>
            <p>Stock disponible: {producto.stock}</p>

            <div>
                <button onClick={decrementar}>-</button>
                <span style={{ margin: "0 0.75rem" }}>{cantidad}</span>
                <button onClick={incrementar}>+</button>
            </div>

            <button onClick={handleAgregar} disabled={producto.stock === 0}>
                Agregar al carrito
            </button>

            {agregado && (
                <p>
                    Producto agregado. <Link to="/carrito">Ver carrito</Link>
                </p>
            )}
            <p><Link to="/productos">← Volver a productos</Link></p>
        </section>
    );
}
