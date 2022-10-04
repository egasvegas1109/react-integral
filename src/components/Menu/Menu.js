import { NavLink } from "react-router-dom";

var Menu = () => {
  return (
    <div>
      <NavLink
        end
        to="/"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Главная
      </NavLink>

      <NavLink
        to="/counter"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Описание метода
      </NavLink>

      <NavLink
        to="/Graph"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        График
      </NavLink>
    </div>
  );
};

export default Menu;
