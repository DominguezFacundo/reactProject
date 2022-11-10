import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const categories = [
    { name: "keyboards", id: 0, route: "/category/keyboards" },
    { name: "headset", id: 1, route: "/category/headset" },
    { name: "mouse", id: 2, route: "/category/mouse" },
  ];

  return (
    <nav className="nav">
      <Link to="/" className="nav-title">
        黒
      </Link>
      <h3 className="nav-brand">Kuro</h3>
      <nav className="categories">
        {categories.map((category) => {
          return (
            <NavLink key={category.id} to={category.route}>
              {" "}
              {category.name}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
