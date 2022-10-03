import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="nav-title">黒</a>
            <h3 className="nav-brand">Kuro</h3>
            <ul className="nav-list">
            <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Products</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact us</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
    }

    export default Navbar;