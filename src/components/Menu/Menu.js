import { NavLink } from "react-router-dom";

var Menu = () => {
  return (
    <div className="menu">
      <NavLink
        end
        to="/"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}
      >
        Главная
      </NavLink>

      <NavLink
        to="/Description"
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

      <NavLink
        to="/Test"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Тест
      </NavLink>
    </div>
  );
};

export default Menu;
