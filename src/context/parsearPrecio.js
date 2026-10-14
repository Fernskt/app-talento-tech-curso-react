// Los precios del JSON vienen como string ("$19.99"), los pasamos a número.
export const parsearPrecio = (precio) =>
    typeof precio === 'number' ? precio : parseFloat(String(precio).replace(/[^0-9.]/g, '')) || 0;
