// En componentes/Contador/Contador.jsx
// Importamos 'useState' desde React.
import { useState } from 'react';
export function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => { setContador(contador + 1); };
    const decrementar = () => { setContador(contador - 1); };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}