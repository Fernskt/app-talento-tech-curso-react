import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";

export function CartWidget() {
    const { totalItems } = useCart();

    return (
        <Link
            to="/carrito"
            aria-label={`Carrito con ${totalItems} productos`}
            style={{ textDecoration: "none", color: "inherit", fontSize: "1.25rem" }}
        >
            🛒
            <span
                style={{
                    marginLeft: "0.25rem",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    background: "var(--accent)",
                    color: "var(--text-h)",
                    borderRadius: "999px",
                    padding: "0.1rem 0.5rem",
                }}
            >
                {totalItems}
            </span>
        </Link>
    );
}
