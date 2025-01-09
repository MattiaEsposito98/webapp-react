import { NavLink } from "react-router-dom";

export default function Nav() {
  const menu = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <ul className="d-flex gap-4 list-unstyled">
        {menu.map((item, i) => (
          <li key={i}>
            <NavLink className="text-decoration-none" to={item.path}>
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>
                  {isActive ? "👉 " : ""}{item.label}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
