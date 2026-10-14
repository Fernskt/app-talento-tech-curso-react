import { useState } from "react";
import { FormularioProducto } from "./FormularioProductos/FormularioProductos";

export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        precio: "",
        stock: "",
    });

    const [imagenFile, setImagenFile] = useState(null);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setDatosForm((prevDatos) => ({
            ...prevDatos,
            [name]: value
        }));
    };

    const manejarCambioImagen = (e) => {
        const file = e.target.files[0];
        setImagenFile(file);
    }

    const manejarEnvio = async (e) => {
        e.preventDefault();
      
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen antes de enviar el formulario.");
            return;
        }

        const apiKey = import.meta.env.VITE_API_IMGBB_KEY;
        const formData = new FormData();
        formData.append("image", imagenFile);

        try {
            console.log("Subiendo imagen a imgbb...");
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            console.log("URL de la imagen subida:", data.data.url);
            if (data.success) {
                const productoConImagen = {
                    ...datosForm,
                    imagen: data.data.url
                };
                console.log("Producto a enviar al backend:", productoConImagen);
            }
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
    };

    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
        />
    );
}