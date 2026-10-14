import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

// Componente reutilizable: recibe los datos del producto por props.
const Item = ({ id, imagen, nombre, precio, stock }) => {
	const [esFavorito, setEsFavorito] = useState(false);

	return (
		<article className={styles.tarjeta}>
			<button
				className={styles.favorito}
				onClick={() => setEsFavorito(!esFavorito)}
				aria-label="Marcar como favorito"
			>
				{esFavorito ? "❤️" : "🤍"}
			</button>
			<img className={styles.imagen} src={imagen} alt={nombre} width={100} />
			<h3 className={styles.nombre}>{nombre}</h3>
			<p className={styles.precio}>{precio}</p>
			<p>{stock > 0 ? `Stock: ${stock}` : "Sin stock"}</p>
			<Link to={`/producto/${id}`} className={styles.boton}>
				Ver detalle
			</Link>
		</article>
	);
};

export default Item;
