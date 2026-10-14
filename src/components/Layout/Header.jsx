import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo} aria-label="Ir al inicio">
				TalentoTech
			</Link>

			<nav aria-label="Navegación principal">
				<ul className={styles.navList}>
					<li>
						<Link to="/"
							className={styles.link}>Inicio</Link>
					</li>
					<li>
						<Link to="/productos" className={styles.link}>Productos</Link>
					</li>
					<li>
						<Link to="/destacados" className={styles.link}>Destacados</Link>
					</li>
				</ul>
			</nav>

			<Link to="/alta" className={styles.loginButton}>Alta de Producto</Link>
		</header>
	);
};

export default Header;
