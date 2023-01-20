import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  
  return (
    <div className="menubar">
      <menu>
        <div>
          <NavLink to="/">Главная</NavLink>
        </div>
        <div>
          <NavLink to="/Mywork">Мои работы</NavLink>
        </div>
        <div>
          <NavLink to="/About">Обо мне</NavLink>
        </div>
        <div>
          <NavLink to="Mycriativity">Моё творчество</NavLink>
        </div>
      </menu>
    </div>
  );
}

export default MenuBar;
