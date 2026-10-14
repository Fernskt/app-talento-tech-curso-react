import styles from './FormularioProductos.module.css';

export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    return (
        <form className={styles.formulario} onSubmit={manejarEnvio}>
            <h2 className={styles.titulo}>Agregar Nuevo Producto</h2>

            <div className={styles.campo}>
                <label htmlFor="nombre" className={styles.etiqueta}>Nombre del Producto</label>
                <input
                    id="nombre"
                    className={styles.input}
                    type="text"
                    placeholder="Ej: Camiseta"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    required
                />
            </div>

            <div className={styles.fila}>
                <div className={styles.campo}>
                    <label htmlFor="precio" className={styles.etiqueta}>Precio</label>
                    <input
                        id="precio"
                        className={styles.input}
                        type="number"
                        min="0"
                        placeholder="Ej: 95"
                        name="precio"
                        value={datosForm.precio}
                        onChange={manejarCambio}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="stock" className={styles.etiqueta}>Stock</label>
                    <input
                        id="stock"
                        className={styles.input}
                        type="number"
                        min="0"
                        placeholder="Ej: 5"
                        name="stock"
                        value={datosForm.stock}
                        onChange={manejarCambio}
                        required
                    />
                </div>
            </div>

            <div className={styles.campo}>
                <label htmlFor="imagen" className={styles.etiqueta}>Imagen</label>
                <input
                    id="imagen"
                    className={styles.input}
                    type="file"
                    accept="image/*"
                    name="imagen"
                    onChange={manejarCambioImagen}
                />
            </div>

            <button type="submit" className={styles.boton}>Guardar Producto</button>
        </form>
    );
}
