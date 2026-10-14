import { Link } from 'react-router-dom';
import styles from './PaginaInicio.module.css';

const beneficios = [
  { icono: '🚚', titulo: 'Envíos a todo el país', texto: 'Recibí tus compras donde estés.' },
  { icono: '🔒', titulo: 'Compra segura', texto: 'Tus datos y pagos siempre protegidos.' },
  { icono: '⭐', titulo: 'Calidad garantizada', texto: 'Productos seleccionados para vos.' },
];

const PaginaInicio = () => {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.titulo}>Bienvenido a TalentoTech</h1>
        <p className={styles.subtitulo}>
          Explora nuestros productos destacados y encontrá lo que necesitás al mejor precio.
        </p>
        <div className={styles.acciones}>
          <Link to="/productos" className={styles.botonPrimario}>Ver productos</Link>
          <Link to="/destacados" className={styles.botonSecundario}>Ver destacados</Link>
        </div>
      </section>

      <section className={styles.beneficios} aria-label="Beneficios">
        {beneficios.map((b) => (
          <article key={b.titulo} className={styles.beneficio}>
            <span className={styles.icono} aria-hidden="true">{b.icono}</span>
            <h3>{b.titulo}</h3>
            <p>{b.texto}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PaginaInicio;
