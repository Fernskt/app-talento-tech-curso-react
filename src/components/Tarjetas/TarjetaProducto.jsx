import styles from "./TarjetaProducto.module.css";
import { useState, useEffect } from "react";

const TarjetaProducto = ({ imagen, nombre, precio, stock, loading, error }) => {

	const [esFavorito, setEsFavorito] = useState(false);
	const [cantidad, setCantidad] = useState(0);

	const toggleFavorito = () => {
		setEsFavorito(!esFavorito);
	};

	const incrementar = () => {
		if (cantidad < stock) {
			setCantidad(cantidad + 1);
		}
	};
	const decrementar = () => {
		if (cantidad > 0) {
			setCantidad(cantidad - 1);
		}
	};

	const handleAgregarAlCarrito = () => {
		alert(`Agregaste ${cantidad} ${nombre} al carrito.`);
	}


	return (
		<article className={styles.tarjeta}>
			<button className={styles.favorito} onClick={toggleFavorito}>
				{esFavorito ? "❤️" : "🤍"}
			</button>
			{ loading ? (
				<p>Cargando...</p>
			) : error ? (
				<p>Error al cargar el producto.</p>
			) : (
				<>
					<img className={styles.imagen} src={imagen} alt={nombre} width={100} />
					<h3 className={styles.nombre}>{nombre}</h3>
				</>
			)}
			<p className={styles.precio}>{precio}</p>
			<div className={styles.contador}>
				<button onClick={decrementar}>-</button>
				<span>{cantidad}</span>
				<button onClick={incrementar}>+</button>
			</div>
			<button disabled={cantidad === 0} className={styles.boton} onClick={handleAgregarAlCarrito}>
				Agregar al carrito
			</button>
		</article>
	);
};

export default TarjetaProducto;
