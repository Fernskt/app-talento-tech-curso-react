import { TarjetaUsuario } from "../Tarjetas/TarjetaUsuario";

const integrantes = [
    { nombre: "Fernando Hasperué", edad: 30, profesion: "Desarrollador Frontend" },
    { nombre: "Juan Pérez", edad: 28, profesion: "Diseñador UX/UI" },
    { nombre: "María Gomez", edad: 32, profesion: "Desarrollador Backend" },
];

function Footer() {
    return (
        <footer style={{
            backgroundColor: "#000000", padding: "10px",
            textAlign: "center", marginTop: "20px", color: "white", fontFamily: "Arial, sans-serif"
        }}>
            <h3>TalentoTech Store</h3>
            <p>Perfumería de calidad · Buenos Aires, Argentina</p>
            <p>contacto@talentotech.com · +54 11 5555-5555</p>

            <div style={{
                display: "flex", justifyContent: "center",
                flexWrap: "wrap", gap: "2rem", margin: "1rem 0"
            }}>
                {integrantes.map((persona) => (
                    <TarjetaUsuario key={persona.nombre} {...persona} />
                ))}
            </div>

            <p>&copy; 2025 - TalentoTech Store</p>
        </footer>
    );
}
export default Footer;
