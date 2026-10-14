import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

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

			<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<CartWidget />
				<Link to="/alta" className={styles.loginButton}>Alta de Producto</Link>
			</div>
		</header>
	);
};

export default Header;
