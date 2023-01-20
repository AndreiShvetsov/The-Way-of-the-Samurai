import React from "react";
import "./Header.css";
import VK from "./VK_Compact_Logo.png"
import TG from "./Logo.png";

function Header() {
  return (
    <header className="header">
      <span>Веб-разработчик приложений</span>
      <a target="_blank" rel="noopener noreferrer" href="https://vk.com/shvetsovandrei"><img src={VK} alt="VK" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://t.me/andrei_max"><img src={TG} alt="Telegram" /></a>
      <span>stelsmax.ru@mail.ru</span>
    </header>
  );
}

export default Header;
