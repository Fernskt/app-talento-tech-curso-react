import Grid from './Grid/Grid';
import TarjetaProducto from "./Tarjetas/TarjetaProducto";
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

    return (
        <div>
            <h2>{Mensaje}</h2>
            <Grid>
                {productos.map((producto, index) => (
                    <TarjetaProducto
                        key={index}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        stock={producto.stock}
                        loading={loading}
                        error={error}
                    />
                ))}
            </Grid>
        </div>
    );
}