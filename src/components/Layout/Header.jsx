import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

const Header = () => {
	const [abierto, setAbierto] = useState(false);
	const cerrar = () => setAbierto(false);

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo} aria-label="Ir al inicio" onClick={cerrar}>
				TalentoTech
			</Link>

			<div className={styles.carrito}>
				<CartWidget />
			</div>

			<button
				type="button"
				className={styles.hamburguesa}
				aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
				aria-expanded={abierto}
				aria-controls="menu-principal"
				onClick={() => setAbierto((v) => !v)}
			>
				<span className={`${styles.barra} ${abierto ? styles.barraAbierta : ''}`} />
			</button>

			<div
				id="menu-principal"
				className={`${styles.menu} ${abierto ? styles.menuAbierto : ''}`}
			>
				<nav aria-label="Navegación principal" className={styles.nav}>
					<ul className={styles.navList}>
						<li>
							<Link to="/" className={styles.link} onClick={cerrar}>Inicio</Link>
						</li>
						<li>
							<Link to="/productos" className={styles.link} onClick={cerrar}>Productos</Link>
						</li>
						<li>
							<Link to="/destacados" className={styles.link} onClick={cerrar}>Destacados</Link>
						</li>
					</ul>
				</nav>

				<Link to="/alta" className={styles.loginButton} onClick={cerrar}>
					Alta de Producto
				</Link>
			</div>
		</header>
	);
};

export default Header;
