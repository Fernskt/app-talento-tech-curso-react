import styles from './Grid.module.css';
function Grid({ children, className = '' }) {
	return (
		<section
			className={`${styles.grid} ${className}`.trim()}
		>
			{children}
		</section>
	);
}

export default Grid;
