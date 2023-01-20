import React from "react";
import "./About.css";
import Portret from "../Content/portret.jpg";
import HTML from "./html-5.png";

function About() {
  return (
    <div className="about">
      <div className="gallerey">
        <img src={Portret} alt="AnimePortret" className="portret" />
        <div className="titl">
          <p>Швецов Андрей Станиславович</p>
          <p>Дата рождения: 10.01.1988</p>
          <p>Город: Ижевск</p>
        </div>
      </div>{" "}
      <div className="perk">
        <div className="titl">
          <p>Используемые знания:</p>
        </div>
        <ul>
          <li>
            <div>HTML</div>
            <img src={HTML} alt="HTML-5" className="HTML" />
          </li>
          <li>CSS </li><img src={HTML} alt="HTML-5" className="HTML" />
          <li>JS</li><img src={HTML} alt="HTML-5" className="HTML" />
          <li>React JS</li><img src={HTML} alt="HTML-5" className="HTML" />
          <li>PHP</li><img src={HTML} alt="HTML-5" className="HTML" />
          <li>SQL</li><img src={HTML} alt="HTML-5" className="HTML" />
        </ul>
      </div>
      <div className="stag">
        <div className="titl">
          <p>Стаж работы: </p>
        </div>

        <p>2007-2008 г. ООО "Балкан-сервис" - электромеханик;</p>
        <p>
          с 2013г. БУ УР "УВДЦ" - ветеринарный врач с периодическим выполнением
          обязанностей <font color="gold"> системного администратора</font> ;
        </p>
        <p>
          с 2020г. - БУ УР "УВДЦ" - дополнительно разработка программы
          лабораторной информационной системы (в роли заказчика, пользователя,
          <font color="gold"> тестировщика, администратора</font>)
        </p>
        <p>
          с 2022 г. БУ УР "УВДЦ" - дополнительно разработка программы
          лабораторной информационной системы (в роли заказчика, пользователя,
          <font color="gold">
            {" "}
            тестировщика, администратора и фронтенд разработчика
          </font>
          )
        </p>
      </div>
      <div className="obrazov">
        <div className="titl">
          <p>Обзразование:</p>
        </div>
        <p>1995-2003 г. МБОУ «ИТ- лицей №24»</p>
        <p>
          2003-2007 г. Среднее специальное - "Автоматизация технологиеских
          процессов и производств" (электромеханик) - БПОУ УР "Ижевский
          индустриальный техникум имени Е.Ф. Драгунова"
        </p>
        <p>
          2008-2013 г. Высшее образование - "Ветеринарный врач" - ФГБОУ ВО
          "Удмуртский государственный аграрный университет"
        </p>
        <p>
          2022-2023 г. Дополнительное образование -{" "}
          <font color="gold">"Web-разработчик"</font> - Академия "TOP"
        </p>
      </div>
    </div>
  );
}

export default About;
