import Grid from './Grid/Grid';
import Item from "./Item/Item";
import styles from './ItemListContainer.module.css';
import { useState, useEffect } from "react";

export function ItemListContainer({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar los productos.</p>;

    return (
        <section className={styles.seccion}>
            <h2 className={styles.titulo}>{Mensaje}</h2>
            <Grid>
                {productos.map((producto) => (
                    <Item
                        key={producto.id}
                        id={producto.id}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        stock={producto.stock}
                    />
                ))}
            </Grid>
        </section>
    );
}
