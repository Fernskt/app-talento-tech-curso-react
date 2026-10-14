// Componente presentacional: se encarga de mostrar la información del usuario, no maneja estado ni lógica de negocio.
import React from 'react';
export function TarjetaUsuario({nombre, edad, profesion}) {

    return (
        <div>
            <h2>{nombre}</h2>
            <p>Soy un {profesion}</p>
            <p>Tengo {edad} años</p>
        </div>
    );
}